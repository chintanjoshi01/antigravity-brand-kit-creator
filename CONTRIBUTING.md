# Contributing to Antigravity Brand Kit Creator 🎨

First off, thank you for considering contributing to **Antigravity Brand Kit Creator**! It's people like you that make this tool great for the global developer and designer community.

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and inclusive environment for everyone.

---

## How Can I Contribute?

### 1. Adding Theme Code Generators
We are expanding the token exporter to support all major UI frameworks! If you are familiar with any of the following, feel free to submit a PR:
- **SwiftUI** (`AppTheme.swift`, `Colors.swift`)
- **Jetpack Compose** (`Color.kt`, `Type.kt`, `Theme.kt`)
- **React / Next.js / CSS Modules** (`theme.ts`, `tokens.json`)
- **Svelte / Vue** (`variables.scss`)

### 2. Enhancing Vector SVG & 4K Showcase Boards
- Improve `build_brand_package.py` to support new logo geometry layouts.
- Enhance the HTML/CSS template for `00_Brand_Package_Showcase.png` to add modern glassmorphism or dark mode variations.

### 3. Improving Antigravity Agent Instructions
- Refine `skills/brand-kit-creator/SKILL.md` to help Antigravity agents better understand complex brand prompt requirements.

---

## Development Setup

1. **Fork the Repository**:
   Click the **Fork** button at the top right of this repository.

2. **Clone your Fork**:
   ```bash
   git clone https://github.com/<your-username>/antigravity-brand-kit-creator.git
   cd antigravity-brand-kit-creator
   ```

3. **Install Dependencies**:
   ```bash
   pip install pillow matplotlib opencv-python
   ```

4. **Run Tests & Example Builds**:
   ```bash
   python skills/brand-kit-creator/scripts/build_brand_package.py --help
   ```

---

## Pull Request Guidelines

1. Create a descriptive branch name (e.g., `feature/swiftui-token-generator` or `fix/svg-leaf-geometry`).
2. Keep your code clean, documented, and properly formatted.
3. Verify that running `python scripts/build_brand_package.py` generates clean SVGs and 4K showcase images without errors.
4. Submit your PR against the `main` branch with a clear description of the changes made.

Thank you for contributing! 🚀
