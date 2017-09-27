# React Chat Plugin

Portable React Chat Plugin 

**********************

### Usage as CDN

#### 1. make a div with id of "chat-plugin"

```
<div id="chat-plugin"></div>

```
#### 2. import the script from the CDN link

```
<script type="text/javascript" src="https://firebasestorage.googleapis.com/v0/b/react-chat-app-caf05.appspot.com/o/app.bundle.js?alt=media&token=aa194153-fea4-42a3-a4a1-25719bd66c95"></script>

```

**********************

#### 1. First install package cross-env globally

```
npm i -g cross-env

```
Ensure npm scripts work across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost
develop environment, run webpack dev server

```
npm start

```
This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 3b. build dist directory
production environment, run webpack

```
npm run build

```
The minified JS bundle files including the output html file will be store in dist directory.
