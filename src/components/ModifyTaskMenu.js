import React, { useState } from "react";

const ModifyTaskMenu = (props) => {
  const [name, setName] = useState(props.name);
  const [category, setCategory] = useState(props.category);
  const [deadline_date, setDeadlineDate] = useState(
    props.deadline_date
  );
  const [deadline_time, setDeadlineTime] = useState(
    props.deadline_time
  );

  return (
    <div className="page-shadow fixed bottom-1/2 right-1/2 z-50 flex translate-x-1/2 translate-y-1/2 flex-col rounded-2xl bg-white p-7 dark:border dark:border-solid dark:border-white dark:bg-black dark:text-white">
      <h2 className="mb-3 text-2xl font-bold">
        {props.modify ? "Modify task" : "Add a task"}
      </h2>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          console.log(name);
          console.log(category);
          console.log(deadline_date);
          console.log(deadline_time);

          props.onSubmit({
            name: name,
            category: category,
            deadline_date: deadline_date,
            deadline_time: deadline_time
          });
          e.preventDefault();
        }}
      >
        <div className="grid shrink-0 auto-rows-fr grid-cols-[300px_300px] gap-2">
          <div className="col-start-1 col-end-3 row-start-1 row-end-1 flex flex-col">
            <label
              htmlFor="name"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Name task
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-start-1 col-end-1 row-start-2 row-end-2 flex flex-col">
            <label
              htmlFor="category"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Category
              <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option
                value="School"
                selected={category === "School"}
              >
                School
              </option>
              <option
                value="Social"
                selected={category === "Social"}
              >
                Social
              </option>
              <option
                value="Home"
                selected={category === "Home"}
              >
                Home
              </option>
              <option
                value="Misc"
                selected={category === "Misc"}
              >
                Misc
              </option>
            </select>
          </div>
          <div className="col-start-1 col-end-1 row-start-3 row-end-3 flex flex-col">
            <label
              htmlFor="deadline_date"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Deadline date
            </label>
            <div className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800">
              <input
                type="date"
                id="deadline_date"
                name="deadline_date"
                value={deadline_date}
                className="h-full w-full bg-transparent dark:text-black dark:invert"
                onChange={(e) => {
                  setDeadlineDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-start-2 col-end-2 row-start-3 row-end-3 flex flex-col">
            <label
              htmlFor="deadline_time"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Deadline time
            </label>
            <div className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800">
              <input
                type="time"
                id="deadline_time"
                name="deadline_time"
                value={deadline_time}
                className="h-full w-full bg-transparent dark:text-black dark:invert"
                onChange={(e) => {
                  setDeadlineTime(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <p>
          <span className="text-red-500">*</span> mandatory
          field
        </p>
        <input
          className="colorful-background self-end rounded-3xl px-3 py-2 text-white dark:border dark:border-solid dark:border-white dark:bg-slate-800"
          type="submit"
          value={props.modify ? "Save changes" : "Add task"}
        />
      </form>
    </div>
  );
};

export default ModifyTaskMenu;
