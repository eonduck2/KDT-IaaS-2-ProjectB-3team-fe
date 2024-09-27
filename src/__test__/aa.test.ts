import { it, expect, describe } from "@jest/globals";
import add from "./add";

describe("add 테스트 케이스", () => {
  it("테스트1", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("테스트2", () => {
    expect(add(1, 3)).toBe(3);
  });
});
