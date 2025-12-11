# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

老乡鸡菜谱页面 - A recipe display application for the "老乡鸡" (Lao Xiang Ji) restaurant chain. Built with React + TypeScript + Vite, deployed via 秒哒 (Miaoda) platform.

## Commands

**Lint and type check (primary command):**
```bash
npm run lint
```
This runs: TypeScript checking (tsgo), Biome linting, ast-grep rules, TailwindCSS validation, and test build.

**Important:** Do NOT use `npm run dev` or `npm run build` directly - they are disabled. Use `npm run lint` for validation.

## Architecture

### Tech Stack
- React 18 + TypeScript + Vite
- TailwindCSS with shadcn/ui components (new-york style)
- React Router for routing
- Supabase for backend (optional, via miaoda-auth-react)

### Key Directories
- `src/pages/` - Page components (HomePage is the main page)
- `src/components/ui/` - shadcn/ui components (excluded from type checking)
- `src/components/` - Custom components (RecipeCard, common/)
- `src/data/` - Static data (recipes.ts)
- `src/types/` - TypeScript type definitions
- `src/hooks/` - Custom React hooks
- `.rules/` - ast-grep rules for code validation

### Path Aliases
Use `@/*` for imports from `src/`:
```typescript
import { Button } from "@/components/ui/button";
import type { Recipe } from "@/types";
```

### Data Model
Main type is `Recipe` in `src/types/index.ts`:
- id, name, price, image, description, ingredients[], steps[]

### Routing
Routes defined in `src/routes.tsx`, rendered by `src/App.tsx` using React Router.

## Linting Rules

- Biome: no undeclared dependencies, no redeclare, no CommonJS
- ast-grep: Validates SelectItem usage, useAuth/AuthProvider pairing
- TypeScript: Strict checking via tsconfig.check.json (excludes `src/components/ui/`)
