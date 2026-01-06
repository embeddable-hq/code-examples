import { inputs } from '@embeddable.com/remarkable-pro';
import { defineComponent, type EmbeddedComponentMeta, type Inputs } from '@embeddable.com/react';
import KpiChartIcon from '.';
import { loadData } from '@embeddable.com/core';

export const meta = {
  name: 'KpiChartIcon',
  label: 'Kpi Chart - Icon',
  category: 'Kpi Charts',
  inputs: [inputs.dataset, inputs.measure, inputs.title, inputs.description, inputs.fontSize],
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
