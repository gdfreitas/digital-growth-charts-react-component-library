// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import RCPCHChart from './RCPCHChart.tsx';
import { twoToEight } from '../testParameters/measurements/twoToEight';
import { ChartStyle } from '../interfaces/StyleObjects.ts';

const meta: Meta<typeof RCPCHChart> = {
  component: RCPCHChart,
};
export default meta;

type Story = StoryObj<typeof RCPCHChart>;

const customChartStyle: ChartStyle = {
  backgroundColour: "tomato"
}

const customStyles = {
  chartStyle: customChartStyle
}

export const SDSChart: Story = {
  args: {
    title: 'Patient Name - Hospital Number',
    measurementMethod: 'height',
    reference: 'uk-who',
    sex: 'female',
    measurements: {
      height: twoToEight,
      weight: [],
      bmi: [],
      ofc: []
    },
    midParentalHeightData: {},
    enableZoom: true,
    chartType: 'sds',
    enableExport: false,
    exportChartCallback: ()=>{},
    clinicianFocus: true,
    theme: 'tanner3',
    customThemeStyles: {}
  }
};

export const CentileChart: Story = {
  args: {
    title: 'Patient Name - Hospital Number',
    measurementMethod: 'height',
    reference: 'uk-who',
    sex: 'female',
    measurements: {height: twoToEight},
    midParentalHeightData: {},
    enableZoom: true,
    chartType: 'centile',
    enableExport: false,
    exportChartCallback: ()=>{},
    theme: 'monochrome',
    customThemeStyles: {}
  },
};

export const TomatoCentileChart: Story = {
  args: {
    title: 'Patient Name - Hospital Number',
    measurementMethod: 'height',
    reference: 'uk-who',
    sex: 'female',
    measurements: {
      height: twoToEight
    },
    midParentalHeightData: {},
    enableZoom: true,
    chartType: 'centile',
    enableExport: false,
    exportChartCallback: ()=>{},
    theme: 'monochrome',
    customThemeStyles: customStyles
  },
};