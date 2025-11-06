
# 📚 Minimal Library Management System

A minimal **Library Management System** built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**.  
This project demonstrates clean architecture, proper state management, and a functional UI that interacts with a RESTful API.

---

## 🚀 Features

### 1. Public Routes
All routes are publicly accessible — no authentication required.

### 2. Book Management
- 📖 **Book List**: View all books in a table.
- ✏️ **Edit Book**: Modify book details.
- ➕ **Add New Book**: Create a new book.
- 🗑️ **Delete Book**: Remove book with confirmation.
- 📦 **Availability**: If `copies = 0`, book is automatically marked unavailable.

### 3. Borrow Book
- Borrow books through a simple form.
- Borrow quantity cannot exceed available copies.
- Automatically updates book availability.
- Redirects to the borrow summary after success.

### 4. Borrow Summary
- Shows a list of borrowed books with aggregated quantities.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React** | Frontend UI framework |
| **TypeScript** | Static typing for scalability |
| **Redux Toolkit + RTK Query** | State management & data fetching |
| **React Router DOM** | Routing |
| **Tailwind CSS** | Minimal & responsive UI styling |
| **Vite** | Lightning-fast build tool |

---

## 🧱 Project Structure
```
src/
├── api/
│ └── api.ts 
│
├── assets/
│ └── book_img.jpg # Redux store configuration
│
├── components/
│ ├── layout/ 
│ │ ├── Footer.tsx
│ │ └── Navbar.tsx
│ │
│ ├── module/
│ │ ├── book/
| | ├── home/
│ │ └── Shared
│
├── config/
│ └── index.ts
|
├── lib/
│ ├── axios.ts
│ ├── utils.ts
|
├── pages/
│ ├── About.tsx
│ ├── AddBook.tsx
| ├── BooksPage.tsx
│ ├── BorrowSummary.tsx
│ ├── Home.tsx 
│
├── routes/
│ └── AppRoutes.tsx # Defines all routes
│
├── types/
│ └── bookTypes.ts # TypeScript interfaces for Book, Borrow, etc.
│
├── App.tsx
├── main.tsx
└── index.css
│ ├── Footer.tsx
│ ├── BookTable.tsx
│ ├── BookForm.tsx
│ ├── BorrowForm.tsx
│ └── ConfirmationModal.tsx
│
├── redux/
│ ├── features/
│ │ ├── book/book.api.ts
│ │ └── Stats/stats.api.ts
│ ├── axiosBaseQuery.ts
│ ├── baseApi.ts
│ ├── hooks.ts
│ ├── store.ts
│
├── routes/
│ └── routes.tsx # Defines all routes
│
├── types.ts # TypeScript interfaces for Book, Borrow, etc.
│ 
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system

npm install
# or
yarn install

Environment Variables
Create a .env file in the root directory:

VITE_API_BASE_URL=https://your-api-url.com

npm run dev

🧠 API Endpoints (Example)

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | `/books`          | Get all books              |
| GET    | `/books/:id`      | Get single book            |
| POST   | `/books`          | Add new book               |
| PUT    | `/books/:id`      | Update book                |
| DELETE | `/books/:id`      | Delete book                |
| POST   | `/borrow/:bookId` | Borrow a book              |
| GET    | `/borrow-summary` | Borrow summary aggregation |

---
🧑‍💻 Author
Your Mohammad Ahsan
📧 ahsanulkarim429@gmail.com
🔗 



 # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])?
``` -->