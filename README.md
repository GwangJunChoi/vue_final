
## 기술 스택

- Vue.js 2.6.10
- Vue Router
- Vuex
- Axios
- Vue Test Utils

## 개발 환경

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 뷰 확장 플러그인 : [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- 뷰 코드 스니펫 : [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등



>#### api document tool
- api [swagger.io](https://swagger.io/)

>#### node version manager 
- nvm  [nvm](https://github.com/nvm-sh/nvm) 노드 버젼 매니져
- 설치
```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
```
$ vi ~/.bash_profile
```
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
```
$ source ~/.bash_profile
```
- 확인
```
$ nvm ls
```
- 다른 버젼 설치 번경
```
$ nvm install (nodeversion)
$ nvm install 12.14.0
```
- 노드 버젼 변경
```
$ nvm use (nodeverion)
$ nvm use 12.14.0
```

# vue cli 설치

- [vue cli install document link](https://cli.vuejs.org/guide/installation.html)
```
//vue cli global install
$ npm install -g @vue/cli
```

# vue Eslint 설정
- ESLint js 코드에서 발견 된 문제 패턴을 식별하기위한 정적 코드 분석 도구
- [eslint](https://eslint.org/)
```
//vue.config.js 
//webpack dev server overlay 설정
module.exports = {
  devServer: {
    overlay: false
  }
};
```
>##### prettier
- 코드 컨벤션 설정
- [prettier](https://prettier.io/)
- .prettierrc 파일 생성 혹은 eslint 설정파일에서 설정
>##### eslint 설정 파일
```
//.eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  //node_modules 라이브러리 추가
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //prettier 관련 설정
    "prettier/prettier": ['error', {
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 2,
      trailingComma: 'all',
      bracketSpacing: true,
      arrowParens: 'avoid',
    }]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};

```
>##### eslint vscode 설정
```
command + , -> eslint search -> Eslint: Always Show Status Always show the ESlint status bar item. 체크 -> Eslint: Probe 파일 설정 -> Eslint: Validate setting.json 설정 

Editor: Format On Save 체크 해제

// ESLint
  // ESLint
  "eslint.validate": [

    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // don't format on save
  "editor.formatOnSave": false,
  "eslint.workingDirectories": [
    {"mode": "auto"}
  ]
```
>##### jsconfig.json file 설정
- [vscode jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./src/*"
      ],
    }
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```
>##### vuejs style guide
- (vuejs style guide)[https://kr.vuejs.org/v2/style-guide/index.html]
