# todo-app
It is an easy project to practice the integration between vue, vuex and Element.ui. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
#### Deploy on heroku server
1. Create server.js file on your root app's directory.
2. Sure that "express" and "serve-static" dependencies are installed.
3. Install heroku on your machine (instructions) --> https://devcenter.heroku.com/articles/heroku-cli
4. Heroku steps (do the next steps on your terminal).
    +    heroku login
    +    heroku create vue-todo-app
    +    git init (Only if your project not have git repo)   
    +    heroku git:remote -a vue-todo-app
    +    git add .
    +    git commit -am "Heroku deployment"
    +    git push heroku master    
5. Your app is ready you can see all heroku steps on heroku's documentation.

  My app on heroku: https://vue-todo-test.herokuapp.com/

#### Github pages

To have github pages on any vue project:
1. deploy.sh file --> Add this file to root app's folder.
```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:OussamaAlouat/vue-todo-app.git master:gh-pages

cd -
```
2. vue.config.js --> Add this file to root's app. *(I decide put '/vue-todo-app' because is my github project name. You put there your github project name)*
```javascript
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-todo-app/'
        : '/'
}
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**Vue Todo App** © [Harsh Mendapara](https://github.com/harshmendapara/), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Harsh Mendapara with help from contributors ([list](https://github.com/Harsh02051998/vue-internet-checker/graphs/contributors)).

> GitHub [@Harsh Mendapara](https://github.com/harshmendapara)

> Gmail [@Harsh Mendapara](mendaparaharsh02@gmail.com)

> Linkedin [@Harsh Mendapara](https://www.linkedin.com/in/harsh-mendapara-44883a165/)

> Facebook [@Harsh Mendapara](https://www.facebook.com/mhb0205)
> 
Let's fly together :)

