import { useTheme } from '@embeddable.com/react';
import { DataResponse, Measure } from '@embeddable.com/core';
import { KpiChart } from '@embeddable.com/remarkable-ui';
import {
  ChartCard,
  getThemeFormatter,
  i18nSetup,
  resolveI18nProps,
  Theme,
} from '@embeddable.com/remarkable-pro';

type KpiChartNumberProProp = {
  title: string;
  description: string;
  results: DataResponse;
  measure: Measure;
  fontSize: number;
};

const KpiChartNumberPro = (props: KpiChartNumberProProp) => {
  const theme = useTheme() as Theme;
  i18nSetup(theme);

  const { title, description, results, measure, fontSize } = resolveI18nProps(props);

  const value = results.data?.[0]?.[measure.name];

  const themeFormatter = getThemeFormatter(theme);
  const valueFormatter = (valueToFormat: number) => themeFormatter.data(measure, valueToFormat);

  return (
    <ChartCard
      data={results}
      dimensionsAndMeasures={[measure]}
      errorMessage={results.error}
      subtitle={description}
      title={title}
    >
      <KpiChart value={value} valueFormatter={valueFormatter} valueFontSize={fontSize} />
    </ChartCard>
  );
};

export default KpiChartNumberPro;
