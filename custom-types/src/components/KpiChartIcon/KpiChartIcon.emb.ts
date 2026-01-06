import { defineComponent, type EmbeddedComponentMeta, type Inputs } from '@embeddable.com/react';
import KpiChartIcon from '.';

export const meta = {
  name: 'KpiChartIcon',
  label: 'Kpi Chart - Icon',
  category: 'Kpi Charts',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
    },
  ],
} as const satisfies EmbeddedComponentMeta;

export default defineComponent(KpiChartIcon, meta, {
  props: (inputs: Inputs<typeof meta>) => {
    return {
      ...inputs,
    };
  },
});
