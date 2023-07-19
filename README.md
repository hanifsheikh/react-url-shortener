<p align="center">
  <img src="./public/assets/logo.svg" alt="Short.ly Logo" width="200" height="80"> 
</p>

<div align="center">
  <p align="center">
    <a href="#"><img src="https://img.shields.io/static/v1?label=Build&message=Passing&color=brightgreen" alt="Build Status"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://rshortener.vercel.app/"><img src="https://img.shields.io/static/v1?label=Deploy&message=Vercel&color=blue" alt="Vercel Deployment"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://rshortener-storybook.vercel.app/"><img src="https://img.shields.io/badge/Storybook-%F0%9F%93%99-FF4785.svg" alt="StoryBook"></a>
  </p>
</div>

This is a simple URL shortener application built using React, TypeScript and TailwindCSS. It allows users to shorten long URLs and provides them with a shortened version that redirects to the original URL.

## Features

- Shorten long URLs and generate a unique shortened URL.
- View a list of previously shortened URLs with their original and shortened versions.
- Redirect users to the original URL when they click on the shortened URL from List.
- Edit or Delete URL form List.

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript that compiles to plain JavaScript.
- React Router: Library for routing in React applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- Vite: A fast build tooling framework for modern web applications.

## Getting Started

To get started with the URL shortener application, follow these steps:

#### 1. Clone the repository:

```
git clone https://github.com/hanifsheikh/react-url-shortener.git
```

#### 2. Change to the project directory:

```
cd react-url-shortener
```

#### 3. Install the dependencies:

```
npm install
```

#### 4. Start the development server:

```
npm run dev
```

#### 5. Visit the application:

Open your web browser and visit `http://localhost:5173/` to access the application.

## Folder Structure

The project's folder structure is organized as follows:

```
react-url-shortener/
    ├── .storybook/
    │   ├── main.ts
    │   ├── manager.ts
    │   ├── preview.tsx
    │   ├── theme.ts
    │   └── ...
    ├── public
    │   └── assets
    │       ├── edit.svg
    │       ├── favicon.webp
    │       ├── list.svg
    │       ├── logo.svg
    │       └── trash.svg
    ├── src
    │   ├── components
    │   │   ├── FancyButton.tsx
    │   │   ├── FancyInput.tsx
    │   │   ├── FancyTable.tsx
    │   │   ├── Header.tsx
    │   │   ├── index.tsx
    │   │   ├── Modal.tsx
    │   │   └── ShortenedURLBox.tsx
    │   ├── hooks
    │   │   └── useURLShortener.ts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── Edit.tsx
    │   │   ├── Entry.tsx
    │   │   ├── List.tsx
    │   │   ├── NotFound.tsx
    │   │   └── Root.tsx
    │   ├── router.tsx
    │   ├── stories
    │   │   ├── components
    │   │   │   ├── Box.stories.tsx
    │   │   │   ├── Button.stories.tsx
    │   │   │   ├── FancyTable.tsx
    │   │   │   ├── Header.stories.tsx
    │   │   │   ├── Header.tsx
    │   │   │   ├── Input.stories.tsx
    │   │   │   └── Table.stories.tsx
    │   │   └── pages
    │   │       ├── 404.stories.tsx
    │   │       ├── Edit.stories.tsx
    │   │       ├── Edit.tsx
    │   │       ├── Entry.stories.tsx
    │   │       ├── List.stories.tsx
    │   │       └── List.tsx
    │   └── utils
    │       ├── constants.tsx
    │       └── types.ts
    ├── CV.pdf
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    ├── README.md
    ├── storybook.log
    ├── tailwind.config.js
    ├── tsconfig.json
    └── vite.config.js
```

- The `public` folder contains public assets.
- The `src` folder contains the source code for the URL shortener application.
- The `pages` folder holds the pages under controlled by the `router.tsx` to render page depending on route.
- The `components` folder holds the React components used in the application.
- The `hooks` folder holds the custom React Hook function `useURLShortener.ts` file which is used in the application.
- The `utils` folder contains app constants and types responsible type checking and app variables.
- The `Root.tsx` file inside `src/pages/` is the main entry point for the application.
- The `main.tsx` file inside `src` is the entry point for rendering the React app in the DOM.
- The `package.json` file contains project metadata and dependencies.
- The `tsconfig.json` file specifies the TypeScript compiler options.
- The `.storybook` folder contains the storybook configuration files.
- The `strories` folder inside `src` contains application storybook stories.
- The `CV.pdf` is my CV.

### Links

[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hanifsheikh) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hanif-sheikh)
