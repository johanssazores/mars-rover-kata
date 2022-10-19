const turnLeft = (x) => {
  if (x === "N") return "W";
  if (x === "W") return "S";
  if (x === "S") return "E";
  return "N";
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
