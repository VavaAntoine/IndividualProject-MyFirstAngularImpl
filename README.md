# IndividualProject-MyFirstAngularImpl
Routing among registered employees, web application.

The requirements that have been fulfilled are the following:
1. The application you need to build is a web application.
2. Your web application needs to be able to connect with a database either locally or remotely.
3. The application must have a central view from where the following sub-screens will be accessed: Attributes, Employees, Map.
Attributes, Employees screens will provide  the list of existing records and an "add" button that allows the creation of a new record (leading to a new screen).  Clicking on an existing record leads the user to an editing view where processing of the record's details and also deletion is allowed. Map screen has search and select functionality. Τhe user can select from a list a feature that the employees want to have from the list of attributes and then the list of employees who meet the criteria is displayed. You can then select an employee and press the "continue" button that displays a map (leading to a new screen).  The map shows with pins all the employees that have been defined from the previous search based on home address. The employee selected from the previous search and selection step is displayed with a different pin. Clicking on an existing pin a new tab shows a google map with a path that connects the selected employee to the employee whose thumbtack was pressed. 
4. User input data should be validated in both frontend and backend with corresponding error messages.
5. All data recovery and actions should be done through appropriate web API calls. The Web API can implement Spring Boot technology and the appropriate IoC and Dependency Injection techniques should be used appropriately. JPA can be used for Data Access. 
6. The application should demonstrate the use of AJAX calls.
**Implemented technologies**: Spring Boot, JPA, Hibernate, MySQL, REST API, **TypeScript**, JavaScript, HTML, CSS, Bootstrap, **Angular** 
