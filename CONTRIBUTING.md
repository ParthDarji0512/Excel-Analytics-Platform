# 🛠️ Contributing to Excel Analytics Platform

Thank you for your interest in contributing to the **Excel Analytics Platform** project! To keep everything smooth and collaborative, please follow these guidelines.

---

## 📥 How to Clone and Run the Project

```bash
git clone https://github.com/yourusername/excel-analytics-platform.git
cd excel-analytics-platform

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup
cd ../backend
npm install
npm run dev
```

---

## 🌱 Branch Naming Conventions

Use the following format:

```
feature/feature-name
bugfix/short-description
hotfix/issue-id
refactor/module-name
```

**Examples:**

- `feature/upload-multiple-files`
- `bugfix/chart-render-issue`
- `refactor/dashboard-layout`

---

## ✅ Pull Request Rules

1. **Target `main` or `dev`** unless instructed otherwise.
2. Keep PRs **small and focused** – one feature or fix per PR.
3. Add a **clear title and description** explaining what the PR does.
4. Link any related **issues using `Closes #issueID`**.
5. Tag reviewers and label the PR appropriately.
6. Make sure the code passes all linter and test checks.

---

## 🎨 Code Style Guidelines

- Use **Prettier** for code formatting (run `npm run format` if configured).
- Maintain consistent **indentation (2 spaces)**.
- **Use semicolons** and consistent quote style (`"`).
- Keep components **modular** and reusable.
- Avoid commented-out dead code in commits.
- Write **clear commit messages**:
  - `feat: added upload preview modal`
  - `fix: chart not rendering on Safari`

---

## 🧪 Testing

We encourage writing unit and integration tests using tools like **Jest** or **Vitest**. Add new tests for your features wherever possible.

---

## 🙌 Need Help?

Feel free to open a discussion or contact one of the maintainers if you need help getting started!

Happy coding! 🚀