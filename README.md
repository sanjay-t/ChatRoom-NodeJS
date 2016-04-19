# ChatRoom

An online chat room that can be used to communicate with each other in groups. This proect is built on the Node.js Framework, it uses Express, Jade and Socket.io to achieve this. Multiple users can connect to the chat room at the same time and start their conversation. When a user first joins, the last 10 messages are shown to him. All the conversations are stored on the MongoDb cloud infrastructure and the entire project is deployed on Microsoft Azure web services.
To implement this project first install Node.js framework, install all the dependencies listed the the app.js file. Once this is done, you have to connect your application to a database. After it is connected to the database, implement the socket.io interface and publish it in Azure.
Live preview of this application can be found at http://chatroom-sanjay.azurewebsites.net/
