type Heading = "N" | "W" | "S" | "E";
type Coordinates = [x: number, y: number];
const Compass: Array<Heading> = ["N", "E", "S", "W"];

const rotate = (turns: number) => (heading: Heading) => {
  const idx = Compass.indexOf(heading);
  return Compass[(idx + turns) % 4];
};

const turnLeft = rotate(3);
const turnRight = rotate(1);

const move = (heading: Heading, position: Coordinates) => {
  const [x, y] = position;
  if (heading === "N") return [x, y + 1];
  if (heading === "E") return [x + 1, y];
  if (heading === "S") return [x, y - 1];
  if (heading === "W") return [x - 1, y];
};

test.each`
  original | expected
  ${"N"}   | ${"W"}
  ${"W"}   | ${"S"}
  ${"S"}   | ${"E"}
  ${"E"}   | ${"N"}
`(
  "When facing $original, turning left should cause us to face $expected",
  ({ original, expected }) => expect(turnLeft(original)).toBe(expected)
);

test.each`
  original | expected
  ${"N"}   | ${"E"}
  ${"E"}   | ${"S"}
  ${"S"}   | ${"W"}
  ${"W"}   | ${"N"}
`(
  "When facing $original, turning right should cause us to face $expected",
  ({ original, expected }) => expect(turnRight(original)).toBe(expected)
);

test("When moving N, we should increment the Y coordinate", () => {
  expect(move("N", [1, 1])).toEqual([1, 2]);
});

test("When moving E, we should increment the X coordinate", () => {
  expect(move("E", [1, 1])).toEqual([2, 1]);
});

test("When moving S, we should increment the Y coordinate", () => {
  expect(move("S", [1, 1])).toEqual([1, 0]);
});

test("When moving W, we should increment the Y coordinate", () => {
  expect(move("W", [1, 1])).toEqual([0, 1]);
});
