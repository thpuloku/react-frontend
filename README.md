# prag-code-frontend
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


