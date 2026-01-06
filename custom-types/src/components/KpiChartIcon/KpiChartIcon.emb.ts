import { defineComponent, type EmbeddedComponentMeta, type Inputs } from '@embeddable.com/react';
import KpiChartIcon from '.';
import { loadData } from '@embeddable.com/core';

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
    {
      name: 'dataset',
      type: 'dataset',
      label: 'Dataset',
    },
    {
      name: 'measure',
      type: 'measure',
      label: 'Measure',
      array: false,
      config: {
        dataset: 'dataset',
      },
    },
  ],
} as const satisfies EmbeddedComponentMeta;

export default defineComponent(KpiChartIcon, meta, {
  props: (inputs: Inputs<typeof meta>) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.dataset,
        select: [inputs.measure],
      }),
    };
  },
});
