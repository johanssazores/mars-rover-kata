type Heading = "N" | "W" | "S" | "E";
const Compass: Array<Heading> = ["N", "E", "S", "W"];

const turnLeft = (heading: Heading) => {
  const idx = Compass.indexOf(heading);
  return Compass[(idx + 3) % 4];
};

const turnRight = (heading: Heading) => {
  const idx = Compass.indexOf(heading);
  return Compass[(idx + 1) % 4];
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
