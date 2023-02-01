const FilterButton = (props) => {
  const filterValue =
    props.myFilter == "All tasks" ? null : props.myFilter;
  return (
    <button
      className={
        props.filter == filterValue
          ? "rounded-2xl bg-slate-200 py-1 px-2 text-sm font-bold text-black sm:text-base"
          : "rounded-2xl py-1 px-2 text-sm font-bold text-slate-200 sm:text-base"
      }
      onClick={() => props.setFilter(filterValue)}
    >
      {props.myFilter}
    </button>
  );
};

export default FilterButton;
