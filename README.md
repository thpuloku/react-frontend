# pragmateam-codeAssesment-frontend
please get the branch of test-assesment in both module

○ Highlights of my improvements (tests and others you choose)

*According to the user requirement ,o minimum ,maximum temperature and passed API response(temperature filed),
it is needed to generate the status ,logic result as too high, too low and all good .

-So first I am planned to  separate the status column <td> ,implemented and implemented <TableData> , and i can reuse the  <TableData> component 
for other  <td> s as well.
- implemented TableData.test.js  test file and run test and implemented and refactored TableData.js file.(write test cases for )
- After that imported it and implement another components Item.test.js ,Item.js ,App.js files , when separating components , 
keep that mind it is needed to reuse them , That is a one of the advantage of separating components
- Item.test.js file , in from this test i was checking if mock the imported <TableData> , the table should be there
- Refactored the backend module to standerd way and planned to move the fetch request to backend since it is not a good practice. 
but i couldn't complete it.


○ What would I improve next if I had more time?
-implement more test cases in Item.test.js
move the fetch request(`http://localhost:8081/temperature/${product.id}`) from frontend to backend and data to backend Node module and do the operation in backend and pass 
all data set to frontend module. implement a new backend call as (`http://localhost:8081/temperature/all`) calling from front end and 
from backend it return  Api call and data mapping 
and return all data which is need to populate the table body
- implement set of Promises(set of API calls) and  Promise.all() 
- Implement test cases for mocking api call  in node module
- implement more test cases in Item.test.js
- Exception handling and showed info message in UI


○ Questions you would ask and your own answers and assumptions
-Assumed that API call always return a success
-how 

○ Any other notes you feel relevant to evaluate your test improvements.
 - need to install uuid when generating key to <TableData>
