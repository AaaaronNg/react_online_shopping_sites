import React from "react";

const DialogSuccess = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog modal-dialog-centered d-print-block">
          <div class="modal-content ">
            <div class="modal-body d-flex justify-content-center">
              <i
                class="bi bi-check-circle text-success "
                style={{ fontSize: "5rem" }}
              ></i>
            </div>
            <p class="h1 d-flex justify-content-center">register success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogSuccess;
