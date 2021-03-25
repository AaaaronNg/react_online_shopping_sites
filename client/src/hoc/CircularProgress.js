import React from "react";

const CircularProgress = () => {
  return (
    <div>
      <div class="d-flex justify-content-center my-5 py-5">
        <div class="my-5 py-5">
          <div
            class="spinner-border "
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
