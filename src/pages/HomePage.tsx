import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

export default function HomePage() {
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
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
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
