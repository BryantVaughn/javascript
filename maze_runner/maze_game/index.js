const gameCreation = (cellsHorizontal=16, cellsVertical=9) => {
    const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const cellsX = cellsHorizontal;
  const cellsY = cellsVertical;

  const unitLengthX = width / cellsX;
  const unitLengthY = height / cellsY;

  const engine = Engine.create();
  engine.world.gravity.y = 0;
  const { world } = engine;
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
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

  const grid = Array(cellsY)
    .fill(null)
    .map(() => Array(cellsX).fill(false));

  const verticals = Array(cellsY)
    .fill(null)
    .map(() => Array(cellsX - 1).fill(false));

  const horizontals = Array(cellsY - 1)
    .fill(null)
    .map(() => Array(cellsX).fill(false));

  const startRow = Math.floor(Math.random() * cellsY);
  const startColumn = Math.floor(Math.random() * cellsX);

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
      if (nextRow < 0 || nextRow >= cellsY
        || nextColumn < 0 || nextColumn >= cellsX) continue;
      
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
        columnIdx * unitLengthX + unitLengthX / 2,
        rowIdx * unitLengthY + unitLengthY,
        unitLengthX,
        5,
        {
          label: "wall",
          isStatic: true,
          render: {
            fillStyle: "#22c4ef"
          }
        }
      );
      World.add(world, wall);
    });
  });

  verticals.forEach((row, rowIdx) => {
    row.forEach((open, columnIdx) => {
      if (open) return;

      const wall = Bodies.rectangle(
        columnIdx * unitLengthX + unitLengthX,
        rowIdx * unitLengthY + unitLengthY / 2,
        5,
        unitLengthY,
        {
          label: "wall",
          isStatic: true,
          render: {
            fillStyle: "#22c4ef"
          }
        }
      );
      World.add(world, wall);
    })
  });

  // Goal
  const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * 0.7,
    unitLengthY * 0.7,
    {
      label: "goal",
      isStatic: true,
      render: {
        fillStyle: "#b2d450"
      }
    }
  );
  World.add(world, goal);

  // Ball
  const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
  const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    {
      label: "ball",
      render: {
        fillStyle: "#f0784a"
      }
    }
  );
  World.add(world, ball);

  document.addEventListener("keydown", evt => {
    const { x, y } = ball.velocity;
    if (evt.keyCode === 87) Body.setVelocity(ball, { x, y: y - 5 });
    if (evt.keyCode === 83) Body.setVelocity(ball, { x, y: y + 5 });
    if (evt.keyCode === 65) Body.setVelocity(ball, { x: x - 5, y });
    if (evt.keyCode === 68) Body.setVelocity(ball, { x: x + 5, y });
  });

  // Win Condition
  Events.on(engine, "collisionStart", evt => {
    evt.pairs.forEach((collision) => {
      const labels = ["ball", "goal"];

      if (
        labels.includes(collision.bodyA.label) && 
        labels.includes(collision.bodyB.label)
      ) {
        document.querySelector(".winner").classList.remove("hidden");
        world.gravity.y = 1;
        world.bodies.forEach(body => {
          if (body.label === "wall") {
            Body.setStatic(body, false);
          }
        });
      }
    });
  });
}

gameCreation(10, 6);


