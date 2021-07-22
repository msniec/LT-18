import React from "react";
const colorsArr = [
  "rgb(0,0,255)",
  "rgb(255, 217, 102)",
  "rgb(204, 0, 0)",
  "rgb(77, 208, 225)",
  "rgb(153, 0, 255)",
  "rgb(244, 204, 204)",
];
const results = [
  "Expert",
  "Solista",
  "Naturalny geniusz",
  "Superman / Superwoman",
  "Perfekcjonista",
  "-",
];
const fontColors = ["white", "black", "white", "black", "white", "black"];
function colors({
  match: {
    params: { id },
  },
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: colorsArr[id],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "4rem", color: fontColors[id] }}>
        {results[id]}
      </div>
    </div>
  );
}

export default colors;
