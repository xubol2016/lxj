import { useState, useMemo, type ChangeEvent } from "react";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Recipe } from "@/types";

// 价格区间选项
const priceRanges = [
  { label: "全部", min: 0, max: Infinity },
  { label: "¥20以下", min: 0, max: 20 },
  { label: "¥20-30", min: 20, max: 30 },
  { label: "¥30以上", min: 30, max: Infinity },
];

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);

  // 筛选后的菜谱列表
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe: Recipe) => {
      // 搜索过滤：匹配菜名或描述
      const matchesSearch =
        searchText === "" ||
        recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchText.toLowerCase());

      // 价格过滤
      const priceRange = priceRanges[selectedPriceRange];
      const matchesPrice =
        recipe.price >= priceRange.min && recipe.price < priceRange.max;

      return matchesSearch && matchesPrice;
    });
  }, [searchText, selectedPriceRange]);

  // 清除所有筛选
  const clearFilters = () => {
    setSearchText("");
    setSelectedPriceRange(0);
  };

  const hasActiveFilters = searchText !== "" || selectedPriceRange !== 0;

  return (
    <div className="min-h-screen flex flex-col">
      {/* 头部 */}
      <header className="bg-primary text-primary-foreground py-8 px-4 shadow-md">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl">🐔</div>
            <h1 className="text-3xl xl:text-4xl font-bold">老乡鸡菜谱</h1>
          </div>
          <p className="text-center mt-3 text-primary-foreground/90 text-sm xl:text-base">
            传承家乡味道，品味经典美食
          </p>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="flex-1 py-8 xl:py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* 搜索和筛选区域 */}
          <div className="mb-8 space-y-4">
            {/* 搜索框 */}
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="搜索菜品名称或描述..."
                value={searchText}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                className="max-w-md"
              />
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters}>
                  清除筛选
                </Button>
              )}
            </div>

            {/* 价格筛选 */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">价格：</span>
              {priceRanges.map((range, index) => (
                <Badge
                  key={range.label}
                  variant={selectedPriceRange === index ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/80 transition-colors"
                  onClick={() => setSelectedPriceRange(index)}
                >
                  {range.label}
                </Badge>
              ))}
            </div>

            {/* 搜索结果统计 */}
            <div className="text-sm text-muted-foreground">
              共找到 <span className="font-semibold text-foreground">{filteredRecipes.length}</span> 道菜品
              {hasActiveFilters && (
                <span className="ml-1">（共 {recipes.length} 道）</span>
              )}
            </div>
          </div>

          {/* 菜品列表 */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe: Recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-lg text-muted-foreground">
                没有找到符合条件的菜品
              </p>
              <Button
                variant="link"
                onClick={clearFilters}
                className="mt-2"
              >
                清除筛选条件
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* 底部 */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">关于老乡鸡</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                老乡鸡始创于2003年，是一家以经营中式快餐为主的连锁餐饮企业。
                我们坚持选用优质食材，传承传统烹饪工艺，为顾客提供健康美味的家常菜品。
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>客服热线：400-8888-888</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>总部地址：安徽省合肥市</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <span>营业时间：07:00-21:00</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                © 2025 老乡鸡菜谱 版权所有
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
