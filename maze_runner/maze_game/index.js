const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 600;
const cells = 3;

const unitLength = width / cells;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls);

// Maze Generation
const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    [arr[counter], arr[idx]] = [arr[idx], arr[counter]];
  }
  return arr;
};

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughMaze = (row, column) => {
  if (grid[row][column]) return;

  grid[row][column] = true;

  const neighbors = shuffle([
    [row-1, column, "up"],
    [row, column+1, "right"],
    [row+1, column, "down"],
    [row, column-1, "left"]
  ]);

  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;
    if (nextRow < 0 || nextRow >= cells
      || nextColumn < 0 || nextColumn >= cells) continue;
    
    if (grid[nextRow][nextColumn]) continue;

    if (direction === "left") verticals[row][column-1] = true;
    else if (direction === "right") verticals[row][column] = true;
    else if (direction === "up") horizontals[row-1][column] = true;
    else if (direction === "down") horizontals[row][column] = true;

    stepThroughMaze(nextRow, nextColumn);
  }
};

stepThroughMaze(startRow, startColumn);

horizontals.forEach((row, rowIdx) => {
  row.forEach((open, columnIdx) => {
    if (open) return;

    const wall = Bodies.rectangle(
      columnIdx * unitLength + unitLength / 2,
      rowIdx * unitLength + unitLength,
      unitLength,
      5,
      {
        isStatic: true
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIdx) => {
  row.forEach((open, columnIdx) => {
    if (open) return;

    const wall = Bodies.rectangle(
      columnIdx * unitLength + unitLength,
      rowIdx * unitLength + unitLength / 2,
      5,
      unitLength,
      {
        isStatic: true
      }
    );
    World.add(world, wall);
  })
});

// Goal
const goal = Bodies.rectangle(
  width - unitLength / 2,
  height - unitLength / 2,
  unitLength * 0.7,
  unitLength * 0.7,
  {
    isStatic: true
  }
);
World.add(world, goal);

// Ball
const ball = Bodies.circle(
  unitLength / 2,
  unitLength / 2,
  unitLength / 4,
);
World.add(world, ball);
