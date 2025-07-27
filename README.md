# 🔍 GitHub User Search App

A small React + TypeScript application that allows searching for GitHub users by their login using the [GitHub API](https://docs.github.com/en/rest). The app displays a list of matching users with avatars and usernames, and shows detailed information when a user is selected.

---

## 📌 Features

- Search GitHub users by login

- Display user avatar and login in a result list

- Show detailed user info:

  - Name

  - Bio

  - Public repository count

  - Profile link

- Debounced input (500ms delay to avoid API spamming)

- Loading state while fetching data

- Error handling for failed requests

- Memoization to prevent unnecessary re-renders

- Styled using SCSS Modules (no global CSS)

---

## 🧪 Bonus (optional features)

- 📱 Responsive design for mobile devices

- ✅ A simple unit test using React Testing Library

---

## 🛠️ Technologies Used

- [React](https://reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Redux Toolkit & RTK Query](https://redux-toolkit.js.org/)

- [SCSS Modules](https://sass-lang.com/)

- [Lodash.debounce](https://lodash.com/docs/4.17.15#debounce)

- [React Testing Library](https://testing-library.com/) (bonus)

---

## 🚀 Getting Started

1. Clone the repository:

```bash

git clone https://github.com/your-username/github-user-search.git

cd github-user-search

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

⚠️ This app uses GitHub’s public API without authentication, which has a limit of 60 requests per hour.

---

## 🧱 Project Structure

```

├── .github
├── .gitignore
├── .vscode
├── public
├── src
│ ├── api
│ │ ├── _test_
│ │ │ ├── setupApiStore.tsx
│ │ │ └── testConstant.ts
│ │ ├── index.ts
│ │ └── users.ts
│ ├── app-router.tsx
│ ├── assets
│ │ ├── img
│ │ └── svg
│ │ └── search
│ ├── components
│ │ ├── ui
│ │ │ ├── button
│ │ │ │ ├── button.module.scss
│ │ │ │ └── index.tsx
│ │ │ ├── error
│ │ │ │ ├── error.module.scss
│ │ │ │ └── index.tsx
│ │ │ ├── input
│ │ │ │ ├── index.tsx
│ │ │ │ └── input.module.scss
│ │ │ ├── loading
│ │ │ │ ├── index.tsx
│ │ │ │ └── loading.module.scss
│ │ │ └── user-item
│ │ ├── user-list
│ │ └── user-info
│ ├── constant
│ │ └── index.ts
│ ├── hooks
│ │ ├── _test_
│ │ └── useDebounce.ts
│ ├── pages
│ │ ├── dashboard
│ │ │ ├── dashboard.module.scss
│ │ │ ├── index.tsx
│ │ │ ├── user-info
│ │ │ │ ├── index.tsx
│ │ │ │ └── user-info.module.scss
│ │ │ └── user-item
│ │ └── main.tsx
│ ├── styles.d.ts
│ └── vite-env.d.ts
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock

```
---

## 🚀 Implementation Highlights

1. 🕒 Debounced Input
To avoid API spamming, search input is debounced using useDebounce hook. The query is sent only after 500ms of no typing activity.
2. ⚙️ RTK Query
• Fetching, caching, and error handling via createApi
• Auto loading/error state handling
• Optimized network usage
3. 🧠 Optimization
• Components are memoized using React.memo or useMemo to avoid unnecessary re-renders
• Query results are cached by RTK Query
4. 🎨 SCSS Modules
• Component-specific styling with no global CSS
• No style conflicts or bleeding
⸻
❗ Error Handling
If a network error occurs or the GitHub API limit is reached:
• A clear error message is shown:
“Something went wrong. Please try again later.”
Handles empty results gracefully.
```

## 🧪 Testing (Bonus)

A minimal test using React Testing Library:

//useDebounce.test.tsx
it("should debounce value change", () => {
const { result, rerender } = renderHook(
({ value, delay }) => useDebounce(value, delay),
{
initialProps: { value: "first", delay: 500 },
}
);

    expect(result.current).toBe("first");

    rerender({ value: "second", delay: 500 });

    expect(result.current).toBe("first");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("second");

});

📱 Responsive Design
• Fully mobile-friendly layout using flexible CSS and media queries
• Adapts seamlessly to small screens
⸻
🔗 Useful Links
• GitHub API Docs: https://docs.github.com/en/rest
• Live Demo (optional): github-users-xbvi.vercel.app

👤 Author
Aida Zeynalova
GitHub: AidaZeynalova
