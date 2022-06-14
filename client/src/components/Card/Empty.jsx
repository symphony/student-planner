const Empty = (props) => {
  return (
    <article className="card__empty">
      {!props.row && <img
        className="card__add-button"
        src="/images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />}
    </article>
  );
};

export default Empty;