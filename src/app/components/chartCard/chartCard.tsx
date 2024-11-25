import styles from "./chartCard.module.scss";

interface ChartCardProps {
  title?: string;
  children: React.ReactNode;
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className={styles.chart}>
      {title ? <h3 className={styles.chartTitle}>{title}</h3> : null}
      <div className={styles.chartWrapper}>{children}</div>
    </div>
  );
}

export default ChartCard;
