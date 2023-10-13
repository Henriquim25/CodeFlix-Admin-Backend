export type CategoryConstructorProps = {
  id?: string;
  name: string;
  description?: string | null;
  is_active?: boolean;
  created_at?: Date;
};

export type CategoryCreateCommand = {
  name: string;
  description?: string | null;
  is_active?: boolean;
};

export class Category {
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: Date;

  constructor(props: CategoryConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description ?? null;
    this.isActive = props.is_active ?? true;
    this.createdAt = props.created_at ?? new Date();
  }

  static create(props: CategoryConstructorProps): Category {
    return new Category(props);
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }

  toJSON() {
    return {
      category_id: this.id,
      name: this.name,
      description: this.description,
      is_active: this.isActive,
      created_at: this.createdAt,
    };
  }
}
