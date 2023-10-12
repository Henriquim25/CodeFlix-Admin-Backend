import { Category } from "../category.entity";

describe("Category Unit Test", () => {
  test("constructor", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);

    const created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "movie description",
      is_active: false,
      created_at,
    });
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe("Movie");
    expect(category.is_active).toBeFalsy();
    expect(category.description).toBe("movie description");
    expect(category.created_at).toBe(created_at);
  });
});
