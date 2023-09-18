export const clearBoard = (context) => {
  if (context) {
    context.clearRect(0, 0, 1000, 600);
  }
};

export const blockMaker = (context, pos, fill, stroke) => {
  context.fillStyle = fill;
  context.strokeStyle = stroke;
  context?.fillRect(pos.x, pos.y, 40, 40);
  context?.strokeRect(pos.x, pos.y, 40, 40);
};