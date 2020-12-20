<h1 align="center">Welcome and feel free to use!</h1>

## 💻 Project

Well, since I have to create a lot of new projects with pretty much the same configs, I decided to save a bit of my time.

If you are starting and don't know how to create a project on your own and config eslint, prettier, editorconfig I highly recommend you to give a try. But don't forget, look it up to know what's going on here. 😉

## 🤔 Benefits of using Prettier and ESLint

If you have set up Prettier, you can configure it to format your file on saving it. That way, you never need to worry about your code formatting anymore. Since Prettier is highly opinionated, you can do only minor configurations.

## 🚀 Technologies

The project was mainly developed with the following technologies:

```
"dependencies": {
  "@types/cors": "^2.8.6",
  "@types/express": "^4.17.9",
  "cors": "^2.8.5",
  "date-fns": "^2.14.0",
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "express-async-errors": "^3.1.1",
  "pg": "^8.0.2",
  "reflect-metadata": "^0.1.13",
  "tsyringe": "^4.2.0",
  "typeorm": "^0.2.29"
},
"devDependencies": {
  "@types/node": "^14.14.14",
  "@typescript-eslint/eslint-plugin": "^4.10.0",
  "@typescript-eslint/parser": "^4.10.0",
  "eslint": "^7.15.0",
  "eslint-config-airbnb-base": "^14.2.1",
  "eslint-config-prettier": "^7.0.0",
  "eslint-import-resolver-typescript": "^2.3.0",
  "eslint-plugin-import": "^2.22.1",
  "eslint-plugin-prettier": "^3.3.0",
  "prettier": "^2.2.1",
  "ts-node-dev": "^1.1.1",
  "tsconfig-paths": "^3.9.0",
  "typescript": "^4.1.3"
}

VS Code with EditorConfig and ESLint
```

## 🗂 Folders

```
├── src
│   ├── @types
│   ├── config
│   ├── errors
│   └── server.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── README.md
├── ormconfig.json
├── package.json
├── prettier.config.js
├── tsconfig.json
└── yarn.lock
```

## 💿 TypeORM

[TypeORM](https://typeorm.io/#/) is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases - from small applications with a few tables to large scale enterprise applications with multiple databases.

## 🧩 You will need

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

## 📚 Creating a repository from a template

- On GitHub, navigate to the main page of the repository.
- Above the file list, click Use this template.
- Use the Owner drop-down menu, and select the account you want to own the repository.
- Type a name for your repository, and an optional description.
- Choose a repository visibility.

## 📚 How to clone and use

To clone and run this application, we will need NodeJS + Yarn (or NPM) installed on computer.

After this clone the repository, from our command line:

```
# Clone this repository
$ git clone https://github.com/LucasReinaldo/node-typescript-eslint-prettier-boilerplate.git

# Go into the repository
$ cd node-typescript-eslint-prettier-boilerplate

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

## 🧠 Need an upgrade?

Check it out: [Yarn Upgrade](https://classic.yarnpkg.com/en/docs/cli/upgrade/).

Upgrades packages to their latest version based on the specified range.

```
$ yarn upgrade
```

## 📖 License

This project is under MIT license [LICENSE](LICENSE.md) to know more.
