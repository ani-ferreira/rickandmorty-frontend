const NavigationBtn = (props) => {
  return (
    <div className="p-5">
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={props.prevPage}
      >
        Anterior
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={props.nextPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default NavigationBtn;
