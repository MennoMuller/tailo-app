import React from "react";

const ModifyTaskMenu = (props) => {
  return (
    <div className="grid-item popup-window">
      <h2>
        {this.props.modify ? "Modify task" : "Add a task"}
      </h2>
      <form>
        <div className="form-grid">
          <div className="form-field task-name">
            <label htmlFor="name">
              Name task <span className="red">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={props.name}
            />
          </div>
          <div className="form-field task-category">
            <label htmlFor="category">
              Category <span className="red">*</span>
            </label>
            <select
              id="category"
              name="category"
            >
              <option
                value="School"
                selected={props.category == "School"}
              >
                School
              </option>
              <option
                value="Social"
                selected={props.category == "Social"}
              >
                Social
              </option>
              <option
                value="Home"
                selected={props.category == "Home"}
              >
                Home
              </option>
              <option
                value="Misc"
                selected={props.category == "Misc"}
              >
                Misc
              </option>
            </select>
          </div>
          <div className="form-field task-deadline-date">
            <label htmlFor="deadline_date">
              Deadline date
            </label>
            <input
              type="date"
              id="deadline_date"
              name="deadline_date"
              value={props.deadline_date}
            />
          </div>
          <div className="form-field task-deadline-time">
            <label htmlFor="deadline_time">
              Deadline time
            </label>
            <input
              type="time"
              id="deadline_time"
              name="deadline_time"
              value={props.deadline_time}
            />
          </div>
        </div>
        <p>
          <span className="red">*</span> mandatory field
        </p>
        <input
          className="submit-button"
          type="submit"
          value={props.modify ? "Save changes" : "Add task"}
        />
      </form>
    </div>
  );
};

export default ModifyTaskMenu;
