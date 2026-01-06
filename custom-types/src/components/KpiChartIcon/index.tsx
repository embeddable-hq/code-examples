import { DataResponse, Measure } from '@embeddable.com/core';

type Props = {
  title: string;
  measure: Measure;
  results: DataResponse;
};

const KpiChartIcon = (props: Props) => {
  const { isLoading, data, error } = props.results;

  const value = data?.[0]?.[props.measure.name];

  return (
    <div>
      <h2>{props.title}</h2>
      <span>{value}</span>
    </div>
  );
};

export default KpiChartIcon;
