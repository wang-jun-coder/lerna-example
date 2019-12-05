# lerna-example
这是一个使用 lerna 的 demo，请不要使用

## 操作步骤记录

### 初始化仓库
* 全局安装 lerna 
* lerna init --independent 初始化仓库
	* 如不适用 independent 参数， 则默认所有包均共享一个版本号
* 配置初始配置
	* lerna.json 
		
		```json
		{
		  "packages": [
		    "packages/*"
		  ],
		  "npmClient": "yarn",			// 指定包管理器，使用 yarn，默认 npm
		  "useWorkspaces": true,		// 配合使用 yarn workspace
		  "command": {
		  	"publish": {
		  		"ignoreChanges": [],
		  		"message": "chore(none): publish", // 发布时提交的commit message
		  		"registry": " https://registry.npmjs.org"
		  	},
		  },
		  "version": "independent"
		}

		```
	* package.json
		
		```json
		{
		  "name": "root",
		  "private": true,
		  "packages": [				// yarn workspace 对应的配置项
		    "packages/*"
		  ],
		  "devDependencies": {
		    "lerna": "^3.19.0"
		  }
		}
		``` 
* 创建包
	* `lerna create @wangjuncode/lerna-example-tools`
		* 创建一个工具包，可单独使用，也可作为依赖
		* 注意：
			* 如为 scope 包， 则package.json 需有如下配置(使用命令创建，默认会有配置)
				
				```json
				{
					...
					  "publishConfig": {
					    "access": "public"
					  },
					...
				}
				```
	* `lerna create @wangjuncode/lerna-example-module`
		* 创建一个独立模块包
	* `lerna create @wangjuncode/lerna-example`
		* 创建一个主包，依赖 tools 和 module
* 安装通用依赖
	此处均已 typescript 包来进行配置
	
	* `yarn add typescript -W -D`
		* 安装 ts 依赖
	* 创建 tsconfig.json 文件
		
		```json
		{
		  "compilerOptions": {
		    "module": "commonjs",
		    "target": "es5",
		    "sourceMap": true,
		    "strict": true,
		    "outDir": "lib",
		    "declaration": true
		  },
		  "include": [
		    "packages/**/*"
		  ],
		  "exclude": [
		    "node_modules",
		    "**/__tests__/*"
		  ]
		}
		``` 
	* 编写相关代码逻辑（见代码）
	* 安装 lint 相关依赖并配置
		* `yarn add prettier tslint tslint-config-prettier -W -D`
		* 配置 .prettierrc
		* tslint.json
	* 安装 jest 相关
		* `yarn add jest ts-jest @types/jest -W -D`
		* 配置 jestconfig.json
	
* 配置 git 等流程
	* 安装相关依赖
		* `yarn add -W -D @commitlint/cli @commitlint/config-conventional commitizen cz-lerna-changelog lint-staged husky`
	* commitizen, cz-lerna-changelog 规范化提交记录
	* commitlint, husky 提交前校验提交信息是否符合规范
	* tslint 校验代码风格
