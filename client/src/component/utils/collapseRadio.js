import React, { useState, useEffect } from "react";

const CollapseRadio = (props) => {
  const [state, setState] = useState({ checked: [] });

  const handleClick = (id) => (e) => {
    const { checked } = state;
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setState({
      checked: newChecked,
    });
  };

  useEffect(() => {
    props.handleFilters(state.checked);
  }, [state]);

  const renderList = () =>
    props.list
      ? props.list.map((item) => (
          <>
            <div class="d-flex pb-2">
              <label class="form-check-label flex-grow-1" for={props._id}>
                {item.name}
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={item._id}
                onClick={handleClick(item._id)}
              />
            </div>
          </>
        ))
      : null;
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.title}`}
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            {props.title}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionShop"
        >
          <div class="accordion-body">{renderList()}</div>
        </div>
      </div>
    </>
  );
};

export default CollapseRadio;
