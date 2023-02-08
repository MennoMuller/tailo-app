import React, { useState } from "react";

const ModifySiteMenu = (props) => {
  const [name, setName] = useState(props.name);
  const [url, setUrl] = useState(props.url);
  const [description, setDescription] = useState(
    props.description
  );

  return (
    <div className="page-shadow fixed bottom-1/2 right-1/2 z-50 flex translate-x-1/2 translate-y-1/2 flex-col rounded-2xl bg-white p-7 dark:border dark:border-solid dark:border-white dark:bg-black dark:text-white">
      <h2 className="mb-3 text-2xl font-bold">
        {props.modify ? "Modify website" : "Add a website"}
      </h2>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          props.onSubmit({
            name: name,
            url: url,
            description: description
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
              Name website
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
          <div className="col-start-1 col-end-3 row-start-2 row-end-2 flex flex-col">
            <label
              htmlFor="url"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Website URL
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={url}
              className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              required
            />
          </div>
          {/*<div className="col-start-1 col-end-1 row-start-3 row-end-3 flex flex-col">
            <label
              htmlFor="icon"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Website icon
            </label>
             <div className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800">
              <input
                type="file"
                id="icon"
                name="icon"
                // value={this.props.icon}
                className="mt-1 h-full dark:text-black dark:invert"
              />
            </div> 
          </div>*/}
          <div className="col-start-1 col-end-3 row-start-3 row-end-3 flex flex-col">
            <label
              htmlFor="description"
              className="absolute ml-2 text-sm text-slate-500"
            >
              Website description
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              className="h-full rounded bg-slate-300 p-2 pt-4 dark:bg-slate-800"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <p>
          <span className="text-red-500">*</span> mandatory
          field
        </p>
        <input
          className="colorful-background self-end rounded-3xl px-3 py-2 text-white dark:border dark:border-solid dark:border-white dark:bg-slate-800"
          type="submit"
          value={
            props.modify ? "Save changes" : "Add website"
          }
        />
      </form>
    </div>
  );
};

export default ModifySiteMenu;
