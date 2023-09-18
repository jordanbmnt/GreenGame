import levelsObj from "./levelsObj";

const borderPositions = [];
const greensPositions = [];
const blockerPositions = [];

levelsObj.level1.grid.forEach((row, rowIndex) => {
  row.forEach((col, colIndex) => {
    if (col === "green") {
      greensPositions.push({ x: colIndex * 40, y: rowIndex * 40 });
    }
    if (col === "border") {
      borderPositions.push({ x: colIndex * 40, y: rowIndex * 40 });
    }
    if (col === "blocker") {
      blockerPositions.push({ x: colIndex * 40, y: rowIndex * 40 });
    }
  });
});

export  { borderPositions, greensPositions, blockerPositions };
