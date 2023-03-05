const Stats = ({ allQuestion, corretQuestion }) => {
  return (
    <div className="statsWrap">
      <div>All Question: {allQuestion}</div>
      <div>Corret Question: {corretQuestion}</div>
    </div>
  );
};

export default Stats;
