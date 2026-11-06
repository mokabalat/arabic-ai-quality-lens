import { describe, expect, it } from "vitest";
import { boundedValue } from "@/components/site/AnimatedData";

describe("scroll animation data limits", () => {
  it("never exceeds the actual 87.78 model score", () => {
    expect(boundedValue(95, 87.78)).toBe(87.78);
    expect(boundedValue(-1, 87.78)).toBe(0);
    expect(boundedValue(87.78, 87.78)).toBe(87.78);
  });
  it("keeps the 25 percent criterion at its unscaled data value", () => {
    expect(boundedValue(25, 100)).toBe(25);
  });
  it("stops the UAE 200 count at exactly 200", () => {
    expect(boundedValue(201, 200)).toBe(200);
    expect(boundedValue(200, 200)).toBe(200);
  });
});