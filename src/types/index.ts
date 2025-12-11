export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

// 菜品类型定义
export interface Recipe {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
}
