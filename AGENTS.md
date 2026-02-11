# Development Guidelines for STARS Erasmus+ Website

## Project Overview

This is a React 18.3.1 + TypeScript website for the STARS Erasmus+ project, built with Vite and Tailwind CSS v4. The project uses a comprehensive component system based on Radix UI and follows the shadcn/ui design patterns.

## Build Commands

### Available Scripts
```bash
# Build for production
npm run build

# Install dependencies
npm install
npm ci  # for CI/CD

# Development (add these if needed)
npm run dev      # add to package.json: "vite"
npm run preview  # add to package.json: "vite preview"
```

### Deployment
- **Automated**: GitHub Actions deploy to GitHub Pages on main branch push
- **Manual**: Run `npm run build` and deploy the `dist/` folder
- **Node Version**: 18.x (as specified in GitHub Actions)

## Code Style Guidelines

### File Structure & Organization
```
src/
├── app/
│   ├── App.tsx              # Main app component
│   ├── components/
│   │   ├── ui/             # Reusable UI components (40+ components)
│   │   ├── stars/          # Page-specific components
│   │   └── figma/          # Utility components
│   └── main.tsx            # Entry point
├── styles/                 # Global styles and CSS
└── assets/                 # Static assets
```

### Component Patterns

#### UI Components (shadcn/ui style)
- Use Class Variance Authority (CVA) for component variants
- Export both component and variants object
- Follow the `cn()` utility pattern for className merging
- Always include `data-slot` attribute for components

```tsx
// Example UI component structure
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        default: "default-size",
        sm: "sm-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Component({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof componentVariants>) {
  return (
    <div
      data-slot="component"
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Component, componentVariants };
```

#### Page Components
- Use explicit React imports: `import React from 'react';`
- Export named functions: `export function ComponentName()`
- Use TypeScript interfaces for props
- Follow mobile-first responsive design

### Import Conventions

#### Import Order
1. React and core libraries
2. Third-party libraries (sorted alphabetically)
3. Internal utilities (`@/` path alias)
4. Relative imports (`./`, `../`)

```tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Layout } from './Layout';
import { SomeComponent } from '../components/SomeComponent';
```

#### Path Aliases
- `@/` maps to `src/` directory
- Use for internal imports: `@/app/components/ui/button`
- Avoid relative imports when possible for cleaner code

### TypeScript Guidelines

#### Type Definitions
- Use interfaces for object shapes: `interface Props { ... }`
- Use type aliases for unions/intersections: `type Variant = 'default' | 'secondary'`
- Import types explicitly: `import type { VariantProps } from "class-variance-authority"`

#### Component Props
```tsx
interface ComponentProps {
  children: React.ReactNode;
  title: string;
  isActive?: boolean;  // optional props with ?
  onAction?: () => void;
}

export function Component({ children, title, isActive = false, onAction }: ComponentProps) {
  // component logic
}
```

### Styling Guidelines

#### Tailwind CSS v4
- Use utility classes for styling
- Follow mobile-first responsive design: `md:`, `lg:`, `xl:`
- Use design tokens from theme.css
- Custom CSS variables for brand colors and spacing

#### Color Palette
- Primary: `teal-700`, `teal-800`
- Secondary: `slate-600`, `slate-800`
- Background: `stone-50`, `white`
- Borders: `stone-200`, `slate-800`
- Text: `slate-800`, `slate-600`

#### Component Styling
```tsx
// Use cn() utility for conditional classes
className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes",
  className
)}
```

### State Management

#### Local State
- Use `useState` for simple component state
- Use `useEffect` for side effects and lifecycle
- Prefer arrow functions for event handlers

```tsx
const [isOpen, setIsOpen] = useState(false);
const [currentPage, setCurrentPage] = useState('home');

const handleClick = () => {
  setIsOpen(!isOpen);
};
```

#### Global State
- Currently uses prop drilling for page navigation
- Consider Context API for complex state needs

### Animation & Interactions

#### Motion (Framer Motion)
- Use `motion` components for animations
- Use `AnimatePresence` for enter/exit animations
- Keep animations subtle and purposeful

```tsx
import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

### Error Handling

#### Component Boundaries
- Add error boundaries for critical components
- Use try-catch for async operations
- Provide fallback UI for failed states

#### Form Handling
- Use React Hook Form for complex forms
- Provide clear validation messages
- Handle loading and error states

### Accessibility

#### Semantic HTML
- Use appropriate HTML5 semantic elements
- Ensure proper heading hierarchy
- Add ARIA labels where needed

#### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Provide focus indicators
- Support screen readers

### Performance Considerations

#### Component Optimization
- Use `React.memo` for expensive components
- Implement proper loading states
- Optimize images and assets

#### Bundle Size
- Import components individually
- Use dynamic imports for large components
- Monitor bundle size regularly

## Development Workflow

### Adding New UI Components
1. Create component in `src/app/components/ui/`
2. Follow the shadcn/ui pattern with CVA
3. Export both component and variants
4. Add to component index if needed
5. Test with different variants and sizes

### Adding New Pages
1. Create component in `src/app/components/stars/`
2. Add page to navigation in `Layout.tsx`
3. Update routing in `App.tsx`
4. Add any new required UI components

### Working with Tailwind CSS v4
- Edit styles in `src/styles/`
- Use `theme.css` for design tokens
- Modify `tailwind.css` for global styles
- PostCSS configuration in `postcss.config.mjs`

## Code Quality Recommendations

### Missing Development Tools (Consider Adding)
```json
{
  "scripts": {
    "dev": "vite",
    "preview": "vite preview",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write src/**/*.{ts,tsx}"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "...",
    "@typescript-eslint/parser": "...",
    "eslint": "...",
    "eslint-plugin-react": "...",
    "eslint-plugin-react-hooks": "...",
    "prettier": "...",
    "typescript": "..."
  }
}
```

### Git Conventions
- Use conventional commits if needed
- Ensure builds pass before deploying
- Test on mobile devices

## Deployment Notes

### GitHub Pages
- Automatic deployment on main branch push
- Build artifacts stored in `dist/`
- Uses GitHub Actions for CI/CD
- Node.js 18.x required

### Environment Variables
- No environment variables currently used
- Add `.env` files if needed (exclude from git)

### Build Optimization
- Vite handles bundling and optimization
- Images and assets are processed automatically
- Consider adding PWA capabilities if needed

## Testing Strategy

### Recommended Testing Setup
```json
{
  "devDependencies": {
    "@testing-library/react": "...",
    "@testing-library/jest-dom": "...",
    "@testing-library/user-event": "...",
    "vitest": "...",
    "jsdom": "..."
  },
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Testing Guidelines
- Test component variants and interactions
- Test form validation and submission
- Test responsive design breakpoints
- Add accessibility tests

## Resources

### Documentation
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion/Framer Motion](https://motion.dev/)
- [Vite](https://vitejs.dev/)

### Component Library
- UI components based on shadcn/ui patterns
- Use existing components before creating new ones
- Follow established design system tokens