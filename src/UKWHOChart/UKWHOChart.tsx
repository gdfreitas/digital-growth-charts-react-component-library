// Generated with util/create-component.js
import React from "react";
import { VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryVoronoiContainer, VictoryTooltip, VictoryAxis, VictoryLegend, VictoryLabel, VictoryTheme } from 'victory'
import ukwhoData from '../../chartdata/uk_who_chart_data'
// import PlotPoint from '../PlotPoint'
import { stndth } from '../functions/suffix'
// import { trial } from '../functions/measurements'

import { UKWHOChartProps } from "./UKWHOChart.types";

import "./UKWHOChart.scss";

const UKWHOChart: React.FC<UKWHOChartProps> = ({ 
    title,
    subtitle,
    measurementMethod,
    sex,
    height,
    width,
    allMeasurementPairs,
    allSDSMeasurementPairs,
    chartBackground,
    centileColour,
    measurementDataPointColour,
 }) => (
    <div data-testid="UKWHOChart" className="centred">
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer 
            labels={({ datum }) => {
              if (datum.l){
               return `${stndth(datum.l)} centile`
              } 
              if (datum.centile_band) {
                return datum.centile_band
              }
            }
          }
            labelComponent={<VictoryTooltip cornerRadius={0} constrainToVisibleArea/>}
            voronoiBlacklist={["linkLine"]}
            // voronoiBlacklist hides the duplicate tooltip text from the line joining the dots
          /> 
        }
        style={{
          background: { fill: chartBackground }
        }}
      >
      <VictoryLegend
        title={[title, subtitle]}
        centerTitle
        gutter={20}
        titleOrientation="top"
        orientation="horizontal"
        style={{ data: { fill: "transparent" } }}
        data={[]}
      />
      <VictoryAxis
        style= {{
          axis: {stroke: "#756f6a"},
          axisLabel: {fontSize: 10, padding: 20},
          ticks: {stroke: "grey"},
          tickLabels: {fontSize: 15, padding: 5},
          grid: { stroke: "#818e99", strokeWidth: 0.5, strokeDasharray: '5 5' }}}
        dependentAxis />
      <VictoryAxis
        label="Age (y)"
        theme={VictoryTheme.material}
        tickLabelComponent={
          <VictoryLabel 
            dy={0}
            style={[
              { fill: "black", fontSize: 10 },
            ]}
          />
        }
        style={{
          axis: {stroke: "#756f6a"},
          axisLabel: {fontSize: 10, padding: 20},
          ticks: {stroke: "grey"},
          tickLabels: {fontSize: 15, padding: 5},
          grid: { stroke: "#818e99", strokeWidth: 0.5, strokeDasharray: '5 5' }
        }}
      />    
        {/* Render the centiles - loop through the data set, create a line for each centile */}  

        <VictoryGroup
          name="uk90_preterm"
        >
          { measurementMethod!=="bmi" && ukwhoData.uk90_preterm[sex][measurementMethod].map((centile, index) => {
            if (index % 2 === 0) {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round',
                      strokeDasharray: '5 5'
                    }
                  }}
                />
              )
            } else {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round'
                    }
                  }}
                />
              )
            }
          })}
        </VictoryGroup>
        <VictoryGroup
          name="uk_who_infant"
        >
          {ukwhoData.uk_who_infant[sex][measurementMethod].map((centile, index) => {
            if (index % 2 === 0) {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round',
                      strokeDasharray: '5 5'
                    }
                  }}
                />
              )
            } else {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round'
                    }
                  }}
                />
              )
            }
          })}
        </VictoryGroup>
        <VictoryGroup
          name="uk_who_child"
        >
          {ukwhoData.uk_who_child[sex][measurementMethod].map((centile, index) => {
            if (index % 2 === 0) {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round',
                      strokeDasharray: '5 5'
                    }
                  }}
                />
              )
            } else {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round'
                    }
                  }}
                />
              )
            }
          })}
        </VictoryGroup>
        <VictoryGroup
          name="uk90_child"
        >
          {ukwhoData.uk90_child[sex][measurementMethod].map((centile, index) => {
            if (index % 2 === 0) {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round',
                      strokeDasharray: '5 5'
                    }
                  }}
                />
              )
            } else {
              return (
                <VictoryLine
                  key={centile.data[0].l + '-' + index}
                  padding={{ top: 20, bottom: 60 }}
                  data={centile.data}
                  style={{
                    data: {
                      stroke: centileColour,
                      strokeWidth: 0.5,
                      strokeLinecap: 'round'
                    }
                  }}
                />
              )
            }
          })}
        </VictoryGroup>
        {/* create a series for each child measurements datapoint */}
        { allMeasurementPairs.map((measurementPair, index) => {
           return (
              <VictoryGroup
                key={'measurement'+index}
              >
                <VictoryScatter
                  data={measurementPair}
                  symbol={({datum})=> datum.age_type==="chronological_age" ? "circle" : "plus"}
                  style={{ data: { fill: measurementDataPointColour } }}
                />
                <VictoryLine
                  name="linkLine"
                  style={{ 
                    data: { stroke: measurementDataPointColour },
                    parent: { border: "1px solid red"}
                  }}
                  data={measurementPair}
                />
              </VictoryGroup>
            )
           })}
      </VictoryChart>
    </div>

);

const Circle = (props) =>{
  return (<svg>
    <circle cx={props.x} cy={props.y} r={1.25} stroke='red' />
  </svg>)
}

const Cross = (props) => {
  return (<svg>
    <line
      x1={props.x - 1.25}
      y1={props.y - 1.25}
      x2={props.x + 1.25}
      y2={props.y + 1.25}
      stroke='red'
      strokeWidth={2}
    />
    <line
      x1={props.x + 1.25}
      y1={props.y - 1.25}
      x2={props.x - 1.25}
      y2={props.y + 1.25}
      stroke='red'
      strokeWidth={2}
    />
  </svg>)
}

export default UKWHOChart;