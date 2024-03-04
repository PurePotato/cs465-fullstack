# CS 465 Fullstack Development 1
## Architecture
###	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
The SPA loads a single HTML page and dynamically updates the page as the user interacts with the application. SPA’s typically use React or Angular front-end development. SPAs don’t require full page reloads to update the page or data. Express HTML requires multiple HTML pages and requires full reloads to update the pages. Because Express HTML is part of Node.js, Express can use the built-in web server from Node. JavaScript is used for interactions between frontend and backend. JavaScript is also used in SPAs to control the dynamic behavior of the web page. 
The backend used a NoSQL MongoDB database for its ability to work with unstructured data. It made the flexibility of our application easier to handle and allowed for quick adaptation when we introduced new data. 

## Functionality
###	How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
JSON is a data format inspired by JavaScript object syntax. JSON ties the frontend and backend with a common data format. JavaScript is a programming language used in both frontend and backend development. One instance where code was refactored was the separation of the header from the individual html file headers. This allowed us to modify the header without having to make a change in every single file the header was located on. Creating reusable UI components creates more readable code, easier maintenance, and faster development. 

## Testing
###	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Methods like GET, POST, PUT, and DELETE are used to create, read, update, or delete data in the apps database. Endpoints are web address that the methods are sending and receiving data form. Security can be administered on the frontend, backend, and server side of an application. Restrictions and roles on users, as well as authentications, are all security measures.  

## Reflection
###	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has helped me increase my understanding of the creation of a full application. Learning the differences between SPA and MPA applications will help me determine what my future projects will need. This course allowed me to expand my knowledge of MongoDB and how it can connect with an application through services. 
