import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import type { Recipe } from "@/types";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{recipe.name}</CardTitle>
              <Badge variant="secondary" className="text-base font-semibold">
                ¥{recipe.price}
              </Badge>
            </div>
            <CardDescription className="line-clamp-2">
              {recipe.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recipe.name}</DialogTitle>
          <DialogDescription className="text-base">
            {recipe.description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">所需食材</h3>
              <ul className="grid grid-cols-2 gap-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">制作步骤</h3>
              <ol className="space-y-3">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <Badge variant="outline" className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center p-0">
                      {index + 1}
                    </Badge>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
