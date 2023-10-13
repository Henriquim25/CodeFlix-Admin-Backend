import { Category } from "../category.entity";

describe("Category Unit Test", () => {
  describe("Constructor", () => {
    test("should create a category without default values", () => {
      let category = new Category({
        name: "Movie",
      });
      expect(category.id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.isActive).toBeTruthy();
      expect(category.createdAt).toBeInstanceOf(Date);
    });

    test("should create a category with all values", () => {
      const created_at = new Date();
      let category = new Category({
        name: "Movies",
        description: "Movie description",
        is_active: true,
        created_at,
      });
      expect(category.id).toBeUndefined();
      expect(category.name).toBe("Movies");
      expect(category.description).toBe("Movie description");
      expect(category.isActive).toBeTruthy();
      expect(category.createdAt).toBe(created_at);
    });
  });
  describe("Category Functions", () => {
    test("should change name", () => {
      let category = new Category({
        name: "Movies",
      });
      category.changeName("Movies2");
      expect(category.name).toBe("Movies2");
    });

  test("should change description", () => {
    let category = new Category({
      name: "Movie",
    });
    category.changeDescription("some description");
    expect(category.description).toBe("some description");
  });

  test("shoul activate the category", () => {
    let category = new Category({
      name: "Movie",
      is_active: false,
    });
    category.activate();
    expect(category.isActive).toBe(true);
  });

  test("should desactivate the category",() =>{
    let category = new Category({
        name: "Movie",
        is_active: true,
      });
      category.deactivate();
      expect(category.isActive).toBe(false);
  })
});
});
