---
name: brand-kit-creator
description: >-
  Standardized workflow to build a complete application brand kit, vector/raster logo assets, brand guidelines documentation, design system theme tokens (colors & typography), native/animated splash screens, and audit app UI for brand compliance. Use when creating a brand package, establishing brand identity guidelines, or updating app themes for Flutter, Web, or Mobile.
---

# Brand Kit Creator Skill

This skill provides a comprehensive, step-by-step workflow for extracting brand requirements, generating a standardized `brand_package/` directory with production-ready vector and high-res raster assets, creating brand guidelines documentation, and integrating brand tokens into any codebase.

---

## Workflow Overview

```
1. Brand Discovery & Spec Definition
   └─ Color Palette (HEX, RGB)
   └─ Typography Hierarchy & Typeface Selection
   └─ Monograms, Icons & Taglines

2. Brand Package Asset Generation (`brand_package/`)
   ├─ 01_Master_Logo/            (Full-color horizontal SVG + PNG)
   ├─ 02_White_Version/          (White & White-Accent SVG + PNG)
   ├─ 03_Monochrome/             (Black & Charcoal Monochrome SVG + PNG)
   ├─ 04_Icons/                  (App Icon, E Monogram, Feature Icons)
   ├─ 05_Alternate_Layouts/      (Stacked Vertical Logo SVG + PNG)
   └─ 06_Brand_Guidelines/       (BRAND_GUIDELINES.md & Colour_Codes.txt)

3. Codebase Theme & Design System Integration
   ├─ Color Tokens & Palette (`app_colors.dart` / CSS variables)
   ├─ Typography Token Scale (`app_typography.dart` / font styles)
   ├─ Native Splash Screens (Android XML / iOS Storyboard / Web manifest)
   └─ In-App Animated Splash Sequence

4. UI Audit & Refactoring
   ├─ Standardize font weights (Light, Regular, Medium, SemiBold, Bold)
   ├─ Replace ad-hoc hex colors with brand theme constants
   └─ Audit navigation bars, headers, cards, dialogs & buttons

5. Verification & Quality Assurance
   └─ Run compiler/linter checks (0 errors, 0 warnings, 0 lints)
```

---

## Executable Helper Scripts

- **Generate Brand Package**:
  `python skills/brand-kit-creator/scripts/build_brand_package.py`
- **Export Theme Tokens**:
  `python skills/brand-kit-creator/scripts/export_theme_tokens.py`
