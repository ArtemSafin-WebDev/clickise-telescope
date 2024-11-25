import styles from "./noData.module.scss";

interface Props {}

function NoData(props: Props) {
  const {} = props;

  return <div className={styles.noData}>Нет данных за этот период</div>;
}

export default NoData;
