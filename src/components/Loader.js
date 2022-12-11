import React from "react";

export const Loader = () => {
  return (
    <div class="ui segment" style={{position:'fixed', top:'40vh',left:'50vw' }}>
      <div class="ui active dimmer">
        <div
          class="ui massive text loader"
          style={{ color: "red", fontSize: "50px" }}
        >
          Loading
        </div>
      </div>
    </div>
  );
};
