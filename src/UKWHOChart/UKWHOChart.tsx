// libraries
import React, { useState } from "react";
import { VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryZoomContainerProps, VictoryVoronoiContainerProps, VictoryTooltip, VictoryAxis, VictoryLegend, VictoryLabel, VictoryArea, Point, createContainer } from 'victory'

// data
import ukwhoData from '../../chartdata/uk_who_chart_data'

// helper functions
import { stndth } from '../functions/suffix'
import { removeCorrectedAge } from "../functions/removeCorrectedAge";
import { measurementSuffix } from "../functions/measurementSuffix";
import { addAlpha } from "../functions/addAlpha";
import { yAxisLabel } from "../functions/yAxisLabel";
import { ageTickNumber } from '../functions/ageTick'
import { setTermDomainsForMeasurementMethod } from "../functions/setTermDomainsForMeasurementMethod";

// interfaces & props
import { ICentile } from "../interfaces/CentilesObject";
import { PretermChart } from '../SubComponents/PretermChart'
import { UKWHOChartProps } from "./UKWHOChart.types";
import { PlottableMeasurement } from "../interfaces/RCPCHMeasurementObject";

// subcomponents
import { XPoint } from '../SubComponents/XPoint';
import { ChartCircle } from '../SubComponents/ChartCircle';
import { MonthsLabel } from '../SubComponents/MonthsLabel';

// style sheets
import "./UKWHOChart.scss";


// definitions

import { delayedPubertyThreshold, pubertyThresholdBoys, pubertyThresholdGirls } from '../SubComponents/DelayedPuberty'
import { setTermXDomainsByMeasurementAges } from "../functions/setTermXDomainsByMeasurementAges";
import { xTickCount } from "../functions/xTickCount";

const VictoryZoomVoronoiContainer = createContainer<VictoryZoomContainerProps, VictoryVoronoiContainerProps>("zoom","voronoi");// allows two top level containers: zoom and voronoi

function UKWHOChart({ 
  title,
  subtitle,
  measurementMethod,
  sex,
  allMeasurementPairs,
  chartBackground,
  gridlineStroke,
  gridlineStrokeWidth,
  gridlineDashed,
  gridlines,
  centileStroke,
  centileStrokeWidth,
  axisStroke,
  axisLabelFont,
  axisLabelColour,
  measurementFill,
  measurementSize,
  measurementShape,
  domains,
  centileData,
  setUKWHODomains,
  isPreterm
}: UKWHOChartProps) {

  const [showPretermChart, setShowPretermChart] = useState(false);
  
  const onClickShowPretermChartHandler=(event)=>{
    setShowPretermChart(!showPretermChart)
  }

  const getEntireYDomain = setTermDomainsForMeasurementMethod(measurementMethod, domains.x[1])

  const getEntireXDomain= setTermXDomainsByMeasurementAges(allMeasurementPairs)
  
  return ( 
    <div data-testid="UKWHOChart" className="centred">
      {/* The VictoryChart is the parent component. It contains a Voronoi container, which groups data sets together for the purposes of tooltips */}
      {/* It has an animation object and the domains are the thresholds of ages rendered. This is calculated from the child data supplied by the user. */}
      {/* Tooltips are here as it is the parent component. More information of tooltips in centiles below. */}

          {showPretermChart ?
          <PretermChart 
              title={title}
              subtitle={subtitle}
              measurementMethod={measurementMethod}
              sex={sex}
              allMeasurementPairs={allMeasurementPairs}
              chartBackground={chartBackground}
              gridlineStroke={gridlineStroke}
              gridlineStrokeWidth={gridlineStrokeWidth}
              gridlineDashed={gridlineDashed}
              gridlines={gridlines}
              centileStroke={centileStroke}
              centileStrokeWidth={centileStrokeWidth}
              axisStroke={axisStroke}
              axisLabelFont={axisLabelFont}
              axisLabelColour={axisLabelColour}
              measurementFill={measurementFill}
              measurementSize={measurementSize}
              measurementShape={measurementShape}
              domains={domains}
              centileData={centileData}
              setUKWHODomains={setUKWHODomains}
              isPreterm={isPreterm}
          />
          : 
          <VictoryChart
              style={{
                background: {
                  fill: chartBackground
                }
              }}
              domain={{x:getEntireXDomain, y:getEntireYDomain}}
              containerComponent={
                  <VictoryZoomVoronoiContainer 
                    labels={({ datum }) => { // tooltip labels
                      if (datum.l){
                        if (datum.x === 4 ){ // move from UK-WHO data to UK90 data at 4y
                          return "Transit point from UK-WHO to UK90 data."
                        }
                        if (datum.x === 2 && measurementMethod==="height"){ // step down at 2 y where children measured standing (height), not lying (length)
                          return "Measure length until age 2;\nMeasure height after age 2.\nA child’s height is usually slightly less than their length.\n"
                        }
                        if(datum.l === "For all Children plotted in this shaded area see instructions."){ // delayed puberty if plotted in this area
                          return datum.l
                        } else return `${stndth(datum.l)} centile`
                      } 
                      if (datum.centile_band) { // these are the measurement points
                        // this is a measurement
                        return datum.calendar_age +'\n' + datum.y + measurementSuffix(measurementMethod) + '\n' + datum.centile_band
                      }
                    }}
                    labelComponent={
                      <VictoryTooltip
                        cornerRadius={0} 
                        labelComponent={
                          <VictoryLabel
                            style={{
                              fontSize: 10,
                              font: axisLabelFont
                            }}
                          />
                        }
                      />
                    }
                    voronoiBlacklist={["linkLine"]}
                    // voronoiBlacklist hides the duplicate tooltip text from the line joining the dots
                    onZoomDomainChange={
                      (domain, props)=> {
                        const upperXDomain = domain.x[1] as number
                        const lowerXDomain = domain.x[0] as number
                        const upperYDomain = domain.y[1] as number
                        const lowerYDomain = domain.y[0] as number
                        setUKWHODomains([lowerXDomain, upperXDomain], [lowerYDomain, upperYDomain]) // this is a callback function to the parent RCPCHChart component which holds state
                      }
                    }
                    allowPan={true}
                  />
              }
              >
              {/* the legend postion must be hard coded. It automatically reproduces and labels each series - this is hidden with data: fill: "transparent" */}
              <VictoryLegend
                title={[title, subtitle]}
                centerTitle
                titleOrientation="top"
                orientation="horizontal"
                style={{ data: { fill: "transparent" } }}
                x={175}
                y={0}
                data={[]}
              />

              {/* Render the x axes - there are 4: one for years, one for months, one for weeks, and one for weeks of gestation  */}
              {/* Gestation weeks are only rendered for children born preterm */}
              {/* From 2 weeks to 2 years, weeks and months (as lollipops) are rendered */}
              {/* From 2 years onwards only years are plotted */}
              {/* If no measurements are plotted, the preterm data is ignored and only centiles from 2 weeks */}
              {/* to 20 years are rendered. */}
              {/* Some space either side of a measurement is calculated to create domains for the chart (upper and lower ages) */}
              {/* If more than one measurement is plotted the domain is some space below the lower measurement and some space above the upper measurement*/}
              {/* This is calculated in the function ageThresholds and ageTicks */}

                {/* X axis in Years  - rendered if there are  plotted child measurements and the max value is > 2y, or no measurements supplied */}
                {  (domains.x[1] > 2 || (allMeasurementPairs.length > 0 ? allMeasurementPairs[allMeasurementPairs.length-1][0]["x"]> 2 : false)) && //render years x axis only if upper domain > 2 or highest supplied measurement > 2y
                    <VictoryAxis
                      minDomain={0}
                      label="Age (years)"
                      style={{
                        axis: {
                          stroke: axisStroke,
                        },
                        axisLabel: {
                          fontSize: 10, 
                          padding: 20,
                          color: axisLabelColour,
                          // font: axisLabelFont
                        },
                        ticks: {
                          stroke: axisStroke 
                        },
                        tickLabels: {
                          fontSize: 6, 
                          padding: 5,
                          color: axisLabelColour
                        },
                        grid: { 
                          stroke: ()=> gridlines ? gridlineStroke : null,
                        }
                      }}
                      tickLabelComponent={
                        <VictoryLabel 
                          dy={0}
                          style={[
                            { fill: axisLabelColour, 
                              fontSize: 6,
                              // font: axisLabelFont
                            },
                          ]}
                        />
                      }
                      tickCount={xTickCount(domains.x[0], domains.x[1], "years")}
                      tickFormat={(t)=> Math.round(t)}
                    /> 
              }

              {/* X axis in Months - rendered if child measurements exist and the max age < 2 but > 2 weeks */}

              {  (domains.x[1] <= 2) &&
                  <VictoryAxis
                      minDomain={0}
                      label="months"
                      axisLabelComponent={<MonthsLabel />}
                      style={{
                        axis: {
                          stroke: axisStroke,
                        },
                        ticks: {
                          stroke: axisStroke 
                        },
                        grid: { 
                          stroke: ()=> gridlines ? gridlineStroke : null,
                        }
                      }}
                      tickLabelComponent={
                        <ChartCircle style={{
                          stroke: axisStroke
                        }}/>
                      }
                      tickValues={[0, 0.083333, 0.166666, 0.249999, 0.333332, 0.416665, 0.499998, 0.583331, 0.666664, 0.749997, 0.83333, 0.916663, 0.999996, 1.083329, 1.166662, 1.249995, 1.333328, 1.416661, 1.499994, 1.583327, 1.66666, 1.749993, 1.833326, 1.916659, 1.999992]}
                      tickCount={12}
                      tickFormat={(t)=> {
                        if(Math.round(t*12)%2===0){
                          return Math.round(t*12)
                        } else {
                          return ''
                        } }}
                  /> }

              {/* X axis in Weeks only: rendered if upper x domain of chart is <=2y */}
                {  (domains.x[0] >= 0 && domains.x[1] <= 2) &&
                    <VictoryAxis
                      label="Age (weeks)"
                      minDomain={0}
                      style={{
                        axis: {
                          stroke: axisStroke,
                        },
                        axisLabel: {
                          fontSize: 10, 
                          padding: 20,
                          color: axisLabelColour,
                          fontFamily: axisLabelFont,
                        },
                        ticks: {
                          stroke: axisStroke,
                          fontSize: 4
                        },
                        tickLabels: {

                          fontSize: 6, 
                          padding: 5,
                          color: axisLabelColour
                        },
                        grid: { 
                          stroke: ()=> gridlines ? gridlineStroke : null,
                        }
                      }}
                      tickLabelComponent={
                        <VictoryLabel 
                          dy={0}
                          style={[
                            { fill: axisLabelColour, 
                              fontSize: 6,
                              // font: axisLabelFont,
                              fontFamily: axisLabelFont
                            },
                          ]}
                        />
                      }
                      tickValues={[0, 0.03846, 0.07692, 0.11538, 0.15384, 0.1923, 0.23076, 0.26922, 0.30768, 0.34614, 0.3846, 0.42306, 0.46152, 0.49998, 0.53844, 0.5769, 0.61536, 0.65382, 0.69228, 0.73074, 0.7692, 0.80766, 0.84612, 0.88458, 0.92304, 0.9615, 0.99996, 1.03842, 1.07688, 1.11534, 1.1538, 1.19226, 1.23072, 1.26918, 1.30764, 1.3461, 1.38456, 1.42302, 1.46148, 1.49994, 1.5384, 1.57686, 1.61532, 1.65378, 1.69224, 1.7307, 1.76916, 1.80762, 1.84608, 1.88454, 1.923, 1.96146, 1.99992]}
                      tickFormat={(t)=> Math.round(t*52)%2===0 ? Math.round(t*52) : ''}
                    /> 
                }

              {/* These are the puberty threshold lines - the boys are a year above the girls */}

              { domains.x[1]> 7.5 && sex==="male" && measurementMethod==="height" && // puberty threshold lines boys UK90
                pubertyThresholdBoys.map((data, index)=> {
                  return (
                    <VictoryAxis dependentAxis
                      key={index}
                      label={data.label}
                      axisLabelComponent = {
                        <VictoryLabel 
                          dy={30} 
                          dx={-50}
                          textAnchor="start"
                        />}
                      style={{ 
                        axis: {
                          stroke: 'black',
                          strokeWidth: 1.0
                        },
                        tickLabels: 
                        { 
                          fill: "none", 
                        },
                        axisLabel: {
                          fontSize: 4,
                          color: axisLabelColour,
                          font: axisLabelFont
                        }
                      }}
                      axisValue={data.x}
                    />
                  );
                })
              }

              { domains.x[1] > 12.5 && sex==="female" && measurementMethod==="height" && // puberty threshold lines uk90 girls
                pubertyThresholdGirls.map((data, index)=> {
                  return (
                    <VictoryAxis dependentAxis
                      key={index}
                      label={data.label}
                      axisLabelComponent = {<VictoryLabel dy={30} dx={-60}/>}
                      style={{ 
                        axis: {
                          stroke: 'black',
                          strokeWidth: 1.0
                        },
                        tickLabels: 
                        { 
                          fill: "none", 
                        },
                        axisLabel: {
                          fontSize: 4,
                          color: axisLabelColour,
                          font: axisLabelFont
                        }
                      }}
                      axisValue={data.x}
                    />
                  );
                })
              }

              {/* render the y axis */}

              {  
                <VictoryAxis // this is the y axis
                  label={yAxisLabel(measurementMethod)}
                  style= {{
                    axis: {
                      stroke: axisStroke,
                      strokeWidth: 1.0
                    },
                    axisLabel: {
                      fontSize: 10, 
                      padding: 20,
                      color: axisLabelColour,
                      font: axisLabelFont
                    },
                    ticks: {
                      stroke: axisStroke
                    },
                    tickLabels: {
                      fontSize: 6, 
                      padding: 5,
                      color: axisLabelColour,
                      font: axisLabelFont
                    },
                    grid: { 
                      stroke: gridlines ? gridlineStroke : null, 
                      strokeWidth: ({t})=> t % 5 === 0 ? gridlineStrokeWidth + 0.5 : gridlineStrokeWidth,
                      strokeDasharray: gridlineDashed ? '5 5' : ''
                    }}}
                  dependentAxis />   
              }
             

              {/* Render the centiles - loop through the data set, create a line for each centile */}  
              {/* On the old charts the 50th centile was thicker and darker and this lead parents to believe it was therefore */}
              {/* the line their children should follow. This was a design mistake, since it does not matter which line the child is on  */}
              {/* so long as they follow it. The middle line was therefore 'deemphasised' on the newer charts. */}
              {/* For each reference data set, there are 9 centiles. The 0.4th, 9th, 50th, 91st, 99.6th are all dashed. */}
              {/* The 2nd, 25th, 75th, 98th are all continuous lines. As there are 4 datasets, this means 36 separate line series to render. */}
              {/* It is essential each centile from each reference is plotted as a series to prevent interpolation between centiles of one reference  */}
              {/* and centiles of another. The discontinuos lines reflect the transition between references and are essential */}
              {/* One final line is the VictoryArea, which represents the shaded area at the onset of puberty. Children that plot here */}
              {/* will have delayed puberty. */}
              {/* Tooltips are found in the parent element (VictoryChart). Tooltips included: */}
              {/* 1 for each centile, 1 for the shaded area, 1 at 2years to indicate children are measured standing leading */}
              {/* to a step down in height weight and bmi in the data set. There is another tool tip at 4 years to indicate transition from datasets. */}

              { centileData.map((reference, index)=>{
                if (index===0 && !isPreterm){ // do not want to render preterm data if this is not a preterm child - this will leave a 2 week gap from 0 to 2 weeks
                  return
                }
                if (reference.length > 0){
                  return (<VictoryGroup key={index}>
                    {reference.map((centile:ICentile, centileIndex: number)=>{
                      if (centileIndex % 2 === 0) { // even index - centile is dashed
                        return (
                        <VictoryLine
                            key={centile.centile + '-' + centileIndex}
                            padding={{ top: 20, bottom: 60 } }
                            data={centile.data}
                            style={{
                            data: {
                                stroke: centileStroke,
                                strokeWidth: centileStrokeWidth,
                                strokeLinecap: 'round',
                                strokeDasharray: '5 5'
                            }
                            }}
                        />
                        )
                      } else { // uneven index - centile is continuous
                          return (
                          <VictoryLine
                              key={centile.centile + '-' + centileIndex}
                              padding={{ top: 20, bottom: 60 }}
                              data={centile.data}
                              style={{
                              data: {
                                  stroke: centileStroke,
                                  strokeWidth: centileStrokeWidth,
                                  strokeLinecap: 'round'
                              }
                              }}
                          />
                          )
                      }
                    })
                  }
                  </VictoryGroup>
                  )
                }})
              }
            

              { domains.x[1] > 7 && sex==="male" && measurementMethod=="height" && //puberty delay shaded area boys

              <VictoryArea          
                data={delayedPubertyThreshold(ukwhoData.uk90_child[sex][measurementMethod][0].data, sex)}
                y0={(d)=> (d.x >= 9 && d.x <=14) ? d.y0 : null}
                style={{
                  data: {
                    stroke: addAlpha(centileStroke, 0.25),
                    fill: addAlpha(centileStroke, 0.25),
                    strokeWidth: centileStrokeWidth
                  }
                }}
                name="delayed"
              />

              }

              { domains.x[1] > 7 && sex==="female" && measurementMethod=="height" && //puberty delay shaded area boys

              <VictoryArea          
                data={delayedPubertyThreshold(ukwhoData.uk90_child[sex][measurementMethod][0].data, sex)}
                y0={(d)=> (d.x >= 8.6 && d.x <=13) ? d.y0 : null}
                style={{
                  data: {
                    stroke: addAlpha(centileStroke, 0.25),
                    fill: addAlpha(centileStroke, 0.25),
                    strokeWidth: centileStrokeWidth
                  }
                }}
                name="delayed"
              />

              }

              {/* create a series for each child measurements datapoint: a circle for chronological age, a cross for corrected - if the chronological and corrected age are the same, */}
              {/* the removeCorrectedAge function removes the corrected age to prevent plotting a circle on a cross, and having duplicate */}
              {/* text in the tool tip */}
              { allMeasurementPairs.map((measurementPair: PlottableMeasurement[], index) => {
                
                let match=false
                if(measurementPair.length > 1){
                  
                  const first = measurementPair[0]
                  const second = measurementPair[1]
                  match = first.x===second.x
                } else {
                  match=true
                }
                return (
                    <VictoryGroup
                      key={'measurement'+index}
                    >
                      { match  ?
                      
                          <VictoryScatter
                            data={measurementPair.length > 1 ? removeCorrectedAge(measurementPair) : measurementPair}
                            symbol={ measurementShape}
                            style={{ data: { fill: measurementFill } }}
                            name='same_age' 
                          />

                        :

                        <VictoryScatter 
                            data={measurementPair}
                            dataComponent={<XPoint/>}
                          style={{ data: 
                            { fill: measurementFill } 
                          }}
                          name= 'split_age'
                        />
                          }

                      <VictoryLine
                        name="linkLine"
                        style={{ 
                          data: { stroke: measurementFill, strokeWidth: 1.25 },
                        }}
                        data={measurementPair}
                      />
                    </VictoryGroup>
                  )
              })}
              </VictoryChart>}
              { isPreterm &&
                <button onClick={onClickShowPretermChartHandler}>View Preterm Chart</button>
              }
      </div>
  );
}

export default UKWHOChart;