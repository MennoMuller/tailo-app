const FilterButton = (props) => {
  const filterValue =
    props.myFilter == "All tasks" ? null : props.myFilter;
  return (
    <button
      className={
        props.filter == filterValue
          ? "filter-button active-filter"
          : "filter-button"
      }
      onClick={() => props.setFilter(filterValue)}
    >
      {props.myFilter}
    </button>
  );
};

export default FilterButton;
