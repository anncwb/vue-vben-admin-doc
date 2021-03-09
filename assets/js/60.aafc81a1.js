(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{253:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"lint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint"}},[s._v("#")]),s._v(" Lint")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("使用 lint 的好处")]),s._v(" "),a("p",[s._v("具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段。")]),s._v(" "),a("p",[s._v("遵循相应的代码规范有以下好处")]),s._v(" "),a("ul",[a("li",[s._v("较少 bug 错误率")]),s._v(" "),a("li",[s._v("高效的开发效率")]),s._v(" "),a("li",[s._v("更高的可读性")])])]),s._v(" "),a("p",[s._v("项目内集成了以下几种代码校验方式")]),s._v(" "),a("ol",[a("li",[s._v("eslint 用于校验代码格式规范")]),s._v(" "),a("li",[s._v("ls-lint 用于校验文件及文件夹命名规范")]),s._v(" "),a("li",[s._v("commitlint 用于校验 git 提交信息规范")]),s._v(" "),a("li",[s._v("stylelint 用于校验 css/less 规范")]),s._v(" "),a("li",[s._v("prettier 代码格式化")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("lint 不是必须的，但是很有必要，一个项目做大了以后或者参与人员过多后，就会出现各种个样的代码封装，对后续的管理造成了一定的麻烦")])]),s._v(" "),a("h2",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[s._v("#")]),s._v(" ESLint")]),s._v(" "),a("p",[s._v("ESLint 是一个代码规范和错误检查工具，有以下几个特性")]),s._v(" "),a("ul",[a("li",[s._v("所有东西都是可以插拔的。你可以调用任意的 rule api 或者 formatter api 去打包或者定义 rule or formatter。")]),s._v(" "),a("li",[s._v("任意的 rule 都是独立的")]),s._v(" "),a("li",[s._v("没有特定的 coding style，你可以自己配置")])]),s._v(" "),a("h3",{attrs:{id:"手动校验代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动校验代码"}},[s._v("#")]),s._v(" 手动校验代码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行下面代码.能修复的会自动修复，不能修复的需要手动修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run lint:eslint\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("p",[s._v("项目的 eslint 配置位于根目录下 "),a("strong",[s._v(".eslintrc.js")]),s._v("内，可以根据团队自行修改代码规范")]),s._v(" "),a("h3",{attrs:{id:"编辑器配合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑器配合"}},[s._v("#")]),s._v(" 编辑器配合")]),s._v(" "),a("p",[s._v("推荐使用 vscode 进行开发，vscode 自带 eslint 插件，可以自动修改一些错误")]),s._v(" "),a("p",[s._v("同时项目内也自带了 vscode eslint 配置，具体在"),a("code",[s._v(".vscode/setting.json")]),s._v("文件夹内部")]),s._v(" "),a("p",[s._v("只要使用 vscode 开发就可以不用任何设置即可使用")]),s._v(" "),a("h2",{attrs:{id:"commitlint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint"}},[s._v("#")]),s._v(" CommitLint")]),s._v(" "),a("p",[s._v("在一个团队中，每个人的 git 的 commit 信息都不一样，五花八门，没有一个机制很难保证规范化，如何才能规范化呢？可能你想到的是 git 的 hook 机制，去写 shell 脚本去实现。这当然可以，其实 JavaScript 有一个很好的工具可以实现这个模板，它就是 commitlint。")]),s._v(" "),a("p",[s._v("commitlint 主要用于校验 git 提交信息规范")]),s._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("commit-lint 的配置位于项目根目录下"),a("strong",[s._v("commitlint.config.js")])]),s._v(" "),a("h3",{attrs:{id:"git-提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-提交规范"}},[s._v("#")]),s._v(" Git 提交规范")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("参考 "),a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue"),a("OutboundLink")],1),s._v(" 规范 ("),a("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",target:"_blank",rel:"noopener noreferrer"}},[s._v("Angular"),a("OutboundLink")],1),s._v(")")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("feat")]),s._v(" 增加新功能")]),s._v(" "),a("li",[a("code",[s._v("fix")]),s._v(" 修复问题/BUG")]),s._v(" "),a("li",[a("code",[s._v("style")]),s._v(" 代码风格相关无影响运行结果的")]),s._v(" "),a("li",[a("code",[s._v("perf")]),s._v(" 优化/性能提升")]),s._v(" "),a("li",[a("code",[s._v("refactor")]),s._v(" 重构")]),s._v(" "),a("li",[a("code",[s._v("revert")]),s._v(" 撤销修改")]),s._v(" "),a("li",[a("code",[s._v("test")]),s._v(" 测试相关")]),s._v(" "),a("li",[a("code",[s._v("docs")]),s._v(" 文档/注释")]),s._v(" "),a("li",[a("code",[s._v("chore")]),s._v(" 依赖更新/脚手架配置修改等")]),s._v(" "),a("li",[a("code",[s._v("workflow")]),s._v(" 工作流改进")]),s._v(" "),a("li",[a("code",[s._v("ci")]),s._v(" 持续集成")]),s._v(" "),a("li",[a("code",[s._v("mod")]),s._v(" 不确定分类的修改")]),s._v(" "),a("li",[a("code",[s._v("wip")]),s._v(" 开发中")]),s._v(" "),a("li",[a("code",[s._v("types")]),s._v(" 类型修改")])])])]),s._v(" "),a("h3",{attrs:{id:"如何关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何关闭"}},[s._v("#")]),s._v(" 如何关闭")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v(".husky/commit-msg")]),s._v("内注释以下代码即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# npx --no-install commitlint --edit "$1"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'feat(home): add home page'")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"ls-lint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls-lint"}},[s._v("#")]),s._v(" Ls-Lint")]),s._v(" "),a("p",[s._v("ls-lint 用于校验项目内文件及文件夹的命名风格，可以统一项目文件命名风格")]),s._v(" "),a("h3",{attrs:{id:"配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("ls-lint 配置文件位于 根目录下 "),a("strong",[s._v(".ls-lint.yml")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\nls:\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要校验的文件夹")]),s._v("\n  src/*:\n    .js: kebab-case "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PascalCase\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 大写开头,或者 index.vue")]),s._v("\n    .vue: PascalCase "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" regex:^index\n    .ts: camelCase "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PascalCase\n    .d.ts: kebab-case\n    .mock.ts: kebab-case\n    .data.ts: camelCase "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kebab-case\n    .test-d.ts: kebab-case\n    .spec.ts: camelCase "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PascalCase\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要忽略的文件夹")]),s._v("\nignore:\n  - node_modules\n  - .git\n  - .circleci\n  - .github\n  - .vscode\n  - dist\n  - .local\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验"}},[s._v("#")]),s._v(" 校验")]),s._v(" "),a("p",[s._v("当使用 git 提交的时候会触发 git hook 进行校验")]),s._v(" "),a("p",[a("strong",[s._v("手动校验")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run ls-lint\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run ls-lint\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("在最新版的 macbook pro M1 中不能使用")]),s._v(" "),a("h3",{attrs:{id:"如何关闭-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何关闭-2"}},[s._v("#")]),s._v(" 如何关闭")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v(".husky/pre-commit")]),s._v("内注释以下代码即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run lint:ls-lint")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"stylelint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint"}},[s._v("#")]),s._v(" Stylelint")]),s._v(" "),a("p",[s._v("stylelint 用于校验项目内部 css 的风格,加上编辑器的自动修复，可以很好的统一项目内部 css 风格")]),s._v(" "),a("h3",{attrs:{id:"配置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-3"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("stylelint 配置位于根目录下"),a("strong",[s._v("stylelint.config.js")])]),s._v(" "),a("h3",{attrs:{id:"编辑器配合-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑器配合-2"}},[s._v("#")]),s._v(" 编辑器配合")]),s._v(" "),a("p",[s._v("如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 css 样式")]),s._v(" "),a("p",[a("strong",[s._v("插件")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",target:"_blank",rel:"noopener noreferrer"}},[s._v("StyleLint"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[s._v("#")]),s._v(" Prettier")]),s._v(" "),a("p",[s._v("prettier 可以用于统一项目代码风格,统一的缩进，单双引号，尾逗号等等风格")]),s._v(" "),a("h3",{attrs:{id:"配置-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-4"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("prettier 配置文件位于项目根目录下"),a("strong",[s._v("prettier.config.js")])]),s._v(" "),a("h3",{attrs:{id:"编辑器配合-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑器配合-3"}},[s._v("#")]),s._v(" 编辑器配合")]),s._v(" "),a("p",[s._v("如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 js 格式")]),s._v(" "),a("p",[a("strong",[s._v("插件")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[s._v("Prettier"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"git-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-hook"}},[s._v("#")]),s._v(" Git Hook")]),s._v(" "),a("p",[s._v("git hook 一般结合各种 lint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则不会进行提交。需要开发者自行修改后再次进行提交")]),s._v(" "),a("h3",{attrs:{id:"husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[s._v("#")]),s._v(" husky")]),s._v(" "),a("p",[s._v("有一个问题就是校验会校验全部代码，但是我们只想校验我们自己提交的代码，这个时候就可以使用 husky。")]),s._v(" "),a("p",[s._v("最有效的解决方案就是将 Lint 校验放到本地，常见做法是使用 husky 或者 pre-commit 在本地提交之前先做一次 Lint 校验。")]),s._v(" "),a("p",[s._v("项目在 "),a("code",[s._v(".husky")]),s._v(" 内部定义了相应的 hooks")]),s._v(" "),a("h3",{attrs:{id:"如何关闭-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何关闭-3"}},[s._v("#")]),s._v(" 如何关闭")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除husky依赖即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" remove huksy\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged"}},[s._v("#")]),s._v(" lint-staged")]),s._v(" "),a("p",[s._v("用于自动修复提交文件风格问题")]),s._v(" "),a("p",[a("strong",[s._v("lint-staged")]),s._v(" 配置位于项目"),a("code",[s._v(".husky")]),s._v("目录下 "),a("strong",[s._v("lintstagedrc.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对指定格式文件 在提交的时候执行相应的修复命令")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.{js,jsx,ts,tsx}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eslint --fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{!(package)*.json,*.code-snippets,.!(browserslist)*rc}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prettier --write--parser json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package.json'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.vue'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eslint --fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylelint --fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add .'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.{scss,less,styl,css,html}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylelint --fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add .'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.md'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);