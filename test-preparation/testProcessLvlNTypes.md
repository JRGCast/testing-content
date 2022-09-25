# Test Process, Levels and Types

## Test Process
* There is no universal software testing process, but the most complete test process consists in dividing on planning, design and execution. Or, more detailed: 
- [x] Test Planning;
- [x] Test Monitoring & Control;
- [x] Test Analysis
- [x] Test Design
- [x] Test Implementation;
- [x] Test Execution;
- [x] Test Completion;

## Test Levels
- [x] Test levels are groups of test activities that are organized and managed together;
- [x] Each test level is an instance of the test process;
- [x] Test levels are related to other activities within the software development lifecycle;

* There are four major levels of testing:

### Unit testing (or component testing)
* It tests everything that is separable (for example modules of code, classes and so on);
* It's developer's responsability;

### Integration testing
* It tests the integration of those modules of code;
* We have two types of integration testing:
#### Component integration
* It tests the integration of the components;
* It's often developer's responsability;
#### System integration
* Should exist in larger projects, with multiple systems (each system can consist of frontend, backend, database);
* It's often tester responsability;
### System testing
* Test the full system operation, focused on behavior and capabilities of system;
* It's the most importanting testing;
* It often produces information that is used by stakeholders to make release decisions;
* Should ideally correspond to the final target or production environment (if system should be used on wifi and Android 8, should be tested on wifi with Android 8);
* It should focus on the overall end-to-end behavior of whole system;
* Often independent testers carry out this system testing;

### Acceptance testing
* It's focused on gathering feedbacks from the users. It consists on alpha and beta testing;
#### Alpha testing
* Bring costumers to the company and let them test in our premises;
#### Beta testing
* Customers tests application on their home;

## Test Types
* Out there you can find a billion of test types names, but in fact, a software can be fully tested by 'just' these (that englobe those 'billions'):
1. Functional Testing:
- [x] Test what the system does (usually seeking answers with yes or no, if X works or not);
- [x] Test the main functions of the system; 
2. Non-functional testing:
- [x] Test how system performs;
- [x] Usually measured within a range (how is the response time to access page X)
3. Black-Box:
- [x] Testing without knowing the internal structure of code/system (provide only inputs and expect outputs);
4. White-Box
- [x] Opposite to black-box, it test is done while monitoring the internal structure of code/system;
5. Dynamic testing
- [x] Test the execution of the code/system;
6. Static testing
- [x] Does not include executing the code/system (like reviewing the prototypes and/or aesthetic codes);
7. Retesting (confirmation testing)
- [x] Testing after debbuging to ensure the defects were fixed;
8. Regression testing
- [x] Testing the unchanged areas to verify if changes affected those (like verify if changes in registration code affected the unchanged login code);
9. Smoke testing*
- [x] Tests the main basic functionalities to ensure that the build is stable enough to continue testing;

