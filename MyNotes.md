# Git a Web Developer Job Mastering the Modern Workflow

## Git

### What is Git?

- SCM, Source Code Management.
- VCS, Version Control System.
- History, Git tracks changes.
- Collaboration, Easy to manage the code with teams.
- Feature Branches, Seperation, and make multiple tasks as specific branch.

### Git in Action

#### Vocab Time-out

- Project = Repository (repo):
	- Its save all data and changes to the repository.
- Working Directory:
	- The directory containing the file we want to track changes.
- Staging:
	- Preparing, and Getting the working directory ready to be tracked.
	- (Working Directory -> Modified Files -> Staging Area -> Commited).
- Commit:
	- Git's commits are stored in the working directory, so we don't need to worry about the commit history every time we commit a commit that changes to the repository every time we commit a commit 
	- **(Git's way of Save or Store the changes)**.
- Push & Pull
	+ Push: is how you transfer commits from your local repository to a remote repo.
	+ Pull: used to fetch and download content from a remote repository and immediately update the local repository to match that content.

#### Git's Configuration
- git config --global user.name "salamanetwork"
- git config --global user.email "salamanetwork@gmail.com"

#### Git's Commands (cmd/bash/pwsh)
- git version
- git -v
- git --version
	+ To check the current git version on the local system.
---
- git init
	+ Initiat and create a local repo
---
- git status
	+ Get recap what had beed changed lately.
---
- git add -A
	+ Add all changes to changes area
---
- git commit -m "Add Your Message Here, about what you had been changed"
---
- git checkout -- .
	+ restore all changes to the last commit.
---
- git push origin master
	+ To transfer the last changes from local to remote.
	+ 'master' = is the name of the branch.
---
- git pull origin master
	+ To transfer the last changes from remote to local.
	+ 'master' = is the name of the branch.
---
- git clone https://github.com/LearnWebCode/welcome-to-git.git
	+ Copy, or clone the repo from remote service, say: github.com
---
- git remote -v
	+ Give you the information about the remote repo you should push your files.
---
- git remote set-url origin https://github.com/ahmedsalamanetwork/travel-site.git
	+ To change the remote url repo
---

### Git Branches

- What is a git branch?
	+ Versions of our project we can try new features on it.
---

- "master" branch:
	+ Think of it as a (primary, main, live, or production) version of our project.

- Tips:
	+ Before creating a branch you should commit all changes.
	+ Should Working Directory Clean.

#### Git Commands:

- git branch
	+ list all the branches on the repo
---
- git reset <file_path>
	+ to remove a file from stage area
---
- git branch <name_of_a_new_branch>
	+ Create a new branch
---
- git checkout <branch_name>
	+ Switch to a branch
---
- git merge <branch_name>
	+ to merge the current 'branch/master' with 'branch/<another_branch_name>'
---
- git merge <branch_name> --no-ff
	+ Using No Fast Forwarding
	+ Lets You Commit having a seperat commit history
---
- git branch -d <branch_name>
	+ To Delete a branch by its name
---
- git checkout -b <branch_name>
	+ Create a new branch and switch over to it.
---

## Node.js & NPM

***The Need for Automation & Organization***

#### What is Node.js?

- Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. 
- Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. 

#### Usage

- Install on a server as a back-end
- Install on a PC for Automation & Organization.

### Node in Action

#### Node's (cmd/bash/pwsh)

- node -v
	+ Get the current Node version
- node any_file_name.js
	+ To run the JS file directly with need of the browser.

### NPM

***NPM = Node Package Manager***

#### What is a NPM?

- ***Centeralized*** place where developers share their code with the world for free.
- ***Avoid*** reinventing the wheel.

#### What is a package management?

- A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner. 

#### Types of Packages

- Node (Core) Packages
	+ Automation
	+ Build Tools
	+ Server Tasks
	+ Oganization
	+ etc...
- Additional Packages:
	+ Lodash
	+ Bootstrap
	+ Normalize.css
	+ etc...

#### Usage

- npm init -y
	+ to initiate the 'package.json' to prepare the directory to NPM modules
---
- npm install
	+ To install the dependencies from 'package.json'
---
- npm install lodash
	+ to install the package
---

## Webpack

***Bundler***

### What is Webpack?

-  Webpack is a module bundler
-  It takes disparate dependencies, creates modules for them and bundles the entire network up into manageable output files. 
-  This is especially useful for Single Page Applications (SPAs), which is the defacto standard for Web Applications today.

### Usage

- npm install webpack webpack-cli --save-dev
	+ Install webpack modules
---
- touch webpack.config.js
	+ Create config file in the main root directory	

### Configuration

#### package.json
	"scripts": {
		"dev": "webpack serve",
	}
	
#### webpack.config.js	

	module.exports = {

		entry: './app/assets/scripts/App.js',
		output: {
	        filename: 'bundled.js',
	        path: path.resolve(__dirname, 'app'),
	    },
	    mode: 'development',
	    watch: true,
	    module: {
	        rules: [
	            {
	                test: /\.css$/i,
	                use: [
	                    'style-loader',
	                    'css-loader',
	                    {
	                        loader: 'postcss-loader',
	                        options: {
	                            postcssOptions: {
	                                plugins: [
										require('postcss-import'),
					    				require('postcss-mixins'),
	                                    require('postcss-simple-vars'), 
	                                    require('postcss-nested'),
										require('postcss-hexrgba'), 
	                                    require('autoprefixer'),
	                                ],
	                            },
	                        },
	                    },
	                ],
	            },
	        ],
	    },
	}

	
	
- npm run dev
	+ To run the 'webpack' script.

### CSS Workflow & Webpack

***Using SASS Features***

- In App.js File Add:
		
		import '../styles/styles.css';
---
- npm install css-loader style-loader --save-dev
	+ To Load css after and before.
---
- npm install postcss-loader --save-dev
	+ To Use package PostCSS
---
- npm install postcss-simple-vars postcss-nested autoprefixer --save-dev
	+ To Install PostCSS Plugins
---
- npm install postcss-import --save-dev
	+ To replace the @import with the actual css
---
- npm install postcss-mixins --save-dev
	+ To let PostCSS suports Mixins
---
- npm install postcss-hexrgba --save-dev
	+ To let PostCSS suports Hex to RGBA Color
---

### BEM / CSS Architectures

**B** = Block: 

+ Is an independent reusable part of our design.
+ Example:

		.large-hero

**E** = Element: 
	
+ An element belongs to a block.
+ It cannot be used outside of the block that it belongs to.
+ Example:

		.large-hero__title

**M** = Modifier:

+ A modifier can be used on a block or an element to indicate a change to the default state of an object.
+ Example:

		// mobile-menu--is-open: is a modifier
		<div class="mobile-menu mobile-menu--is-open"><div>

#### B.E.M Overview

- CSS selectors should target elements directly with class, instead of relying on type selectors, descendent selectors, and the cascade.
- Because we are limiting cascade we are free to move blocks around and reuse them throughout the page.
- Blocks can be nested inside other blockes.
- Identify patterns, and the create single-responsibility blocks.
- Makes the relationships between our HTML and CSS clear.

### webpack Automation Using webpack-dev-server

- npm install webpack-dev-server --save-dev
	+ For Installation
---
- Config webpack.config.js:
	+ Add this code
	
			devServer:{
		        watchFiles: [
		            "app/**/*.html",
		        ],
		        static: {
		            directory: path.join(__dirname, 'app'),
		            watch: false,
		        },
		        hot: true,
		        port: 3000,
		        // liveReload: false,
	    	},
		    // I commented this because we setup devServer
		    // watch: true,
---
- Config package.json
	+ Add this code

			"scripts": {
			    "dev": "webpack serve",
			    "test": "echo \"Error: no test specified\" && exit 1"
		  },
---
- Config Main JS File 'App.js'
	+ Add this code
	
			// Check and Accept of the Hot Module
			if(module.hot)
			{
			    module.hot.accept();
			}
---
- npm run dev
	+ To run the script
---


## CSS Mixin

### Define Mixin

		@define-mixin mixinName {
			// css code, using @mixin-content;
		}

### Using Mixin
		@mixin mixinName {
			// css code
		}

---

## Responsive Images

### Image Crop and Resize (3rd party Graphic App) [Method 1]

#### HTML <picture></picture> Element

***Using to set multiple images with conditions, small, medium, and large screens***

		<picture>
			<source srcset="images/pic-large.jpg" media="(min-width: 1200px)">
			<source srcset="images/pic-medium.jpg" media="(min-width: 760px)">
			<img src="images/pic-small.jpg" alt="alternative text">
		</picture>


---

### Image Resolution & File Size [Method 2]

#### HTML <img> Element

***Using srcset attribute to list all images seperated by comma ','***

***Before the comma ',' you mension the size of w you want to help the browser decide which image shoud be loaded***

		<img 
			srcset="
				images/pic-small.jpg 530w, 
				images/pic-medium.jpg 800w, 
				images/pic-small.jpg 1200w" 
				alt="alternative text"
		>

---

## CSS Grid

		.parent {
			width: 200px;
			height: 200px;
			border 4px solid #000;
			
			display: grid;
			
			/* Divide int 3 columns */ 
			display-template-columns: 1fr 1fr 1fr;
			
			/* 
				Instead of using '%' use 'fr'='Fraction Unit' 
				To let the browser divide it evenly.
				display-template-columns: repeat(3, 1fr);
			*/
			
			/* Divide int 3 rows */ 
			display-template-rows: 1fr 1fr 1fr;
		}

		.a {
			background-color rgba(150, 0, 0, 0.5);
			
			/* let this colmun take 2 cells */ 
			grid-colmun: span 2;
		}

		.b {
			background-color rgba(0, 0, 150, 0.5);
			
			/* let this colmun take 2 cells */ 
			grid-colmun: 1/ span 2;
			
			/* 
				You can Replace 'span 2' with '<place|column>/<size>'
				grid-colmun: 1 / span 2;
			*/

			/* let this row take 2 cells */ 
			grid-row: span 2;

			/* 
				You can Replace 'span 2' with '<place|row>/<size>'
				grid-row: 1 / span 2;
			*/

			/* 
				Overlapping:
					You Must add grid-column & grid-row and use
					<place>/<size>
			 */
		}
