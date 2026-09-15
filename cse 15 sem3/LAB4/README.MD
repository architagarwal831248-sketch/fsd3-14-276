# NPM Project
1. create project folder
2. right click on project folder and select open
integrated terminal
![alt text](./image.png)
3. type in terminal 'npm init -y' press eneter
4. open packages.json file from project folder
5. update type as ` module ` in package.json
![alt text](./image-1.png)
6. type in terminal ` npm i nodemon -D ` to install nodemon, which 
restarts server while file changes. -D flag indicate install in dev dependency
7. it creates node_modules folder and package-lock.json
8. update.gitignore file and write project-folder/node_modules
9. update package.json to run the  project, update srcipt property as below
![alt text](./image-2.png)
```
 "scripts": {
     "start": "node app.js",
     "dev": "nodemonapp.js"
      }
      ```
10. now you can start the server by typing ` npm run dev `in the terminal project folder 