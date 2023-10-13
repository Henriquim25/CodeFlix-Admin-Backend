import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly prop1: string, readonly prop2: number) {
    super();
  }
}

describe("ValueObject Unit Test", () => {
  test("should be equals", () => {
    const valueObject1 = new StringValueObject("test");
    const valueObject2 = new StringValueObject("test");
    expect(valueObject1.equals(valueObject2)).toBe(true);

    const complexObject1 = new ComplexValueObject("test", 1);
    const complexObject2 = new ComplexValueObject("test", 1);
    expect(complexObject1.equals(complexObject2)).toBe(true);
  });

  test("should not be equals", () => {
    const valueObject1 = new StringValueObject("test");
    const valueObject2 = new StringValueObject("test2");
    expect(valueObject1.equals(valueObject2)).toBe(false);
    expect(valueObject1.equals(null as any)).toBe(false);
    expect(valueObject2.equals(undefined as any)).toBe(false);

    const complexObject1 = new ComplexValueObject("test", 1);
    const complexObject2 = new ComplexValueObject("test", 2);
    expect(complexObject1.equals(complexObject2)).toBe(false);
    expect(complexObject1.equals(null as any)).toBe(false);
    expect(complexObject2.equals(undefined as any)).toBe(false);
  });
});
