# React App Creation :

- go to the folder where you need to create the app inside
- open it with Terminal
- `js npx create-react-app myapp`
- `cd m yapp`
- `npm start`
- to change the port you should go to :
- package.json -> scripts -> "start" : here add:
- "start": "PORT=5050 react-scripts start"

# React App folder Structure

- public: includes the static files
- src: includes React Files
- package.json / package.lock.json
- node-modules : dont keep it after development
- after deleting node-modules you can stuill reinstall by :
- `npm install` same level as package.json
