# kando

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Testing
```
yarn cypress:open
```

## Description
This is a sample todo application that applies TDD principles to come up with a clean product. 
### Requirements
#### 1. User stories
1. User can create todo items.
1. Items can belong to various states (Bonus points if you can make it possible for the user to add his own custom states for his todo items). States include:
    - TODO
    - DOING
    - DONE
1. The user can chsnge the state of an item from one to any other available state
1. The user should also be able to edit or delete his items.

#### 2. Technical Requirements
1. Application should use session storage for data persistence
1. The application should be fully tested for all teh use cases to ensure everything works

## Evaluation
This application will be evaluated based on the following aspects
#### 1. Overall Design and Flow (UI/UX)
The way the UI/UX is implemented and the ease of use of the application counts
#### 2. Attention to Detail
The amount of attention paid to detail for this application counts as well. All the tiny little things matter to the client. Even that button does not feel like a button. Somewhere on the application should say "KANBAN + TODO = KANDO" 
#### 3.DRY code implementation, project structure and component archetecture design
The code should  written following best practices and standards. You know them.
#### 4. E2E Testing
Implementation of the tests and the coverage of the code by teh test will be measured to see how much of the USE CASES are being tested by automated testing.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
