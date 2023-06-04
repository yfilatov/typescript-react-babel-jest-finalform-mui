import { TITLE } from "../Hello";
describe("<Hello>", () => {
  test("Title", () => {
    expect(TITLE).toBe("Hello World");
  });
});
