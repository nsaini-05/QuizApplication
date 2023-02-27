# QuizApplication
Quizzy is a web Application built using NodeJs and React. The database used for storing the questions and user scores is NOSQL(MongoDB).


#### Model for Question 

```json
{
  "question" : "<Question, string>",
  "options" : "<options, Array>"
}
```
#### Model for option 

```json
{
  "label" : "<Label, string>",
  "value" : "<Option Value, string>"
  "isCorrect" : "<boolean>"

}
```

##### Sample Question from database

```json
{
  "question":
      "At what age can someone first attend an R-rated movie without an accompanying adult?",
"options": [
      {"label": "A", "value": "15", "isCorrect": false },
      {"label": "B", "value": "17", "isCorrect": false },
      {"label": "C", "value": "18", "isCorrect": true },
      {"label": "D", "value": "21", "isCorrect": false }
    ]

}
```




### Features

### Backend
The API is able to do the following
- Get Random Question from database and present to user.
- Check if the slected option is correct
- Save the user name and score 
- Get all  scores of quizes played before
- Scores are arranged in descending order
- Seeding data from js file to database

### Running API Only

1. Run the command npm install to install all the dependencies 
2. Run : npm run prod or npm run dev
3. API can be access on localhost:5000/api

### Routes
API is tested using postman and data sent in post request is in json format

#### Getting Random Question
GET Request to [http://localhost:5000/api](http://localhost:5000/api) as example :

```json
{
    "_id": "618233d62dd2b8ebd567a1ce",
    "question": "In what decade did Israel become an independent state?",
    "options": [
        {
            "label": "A",
            "value": "1920s",
            "_id": "618233d62dd2b8ebd567a1cf"
        },
        {
            "label": "B",
            "value": "1940s",
            "_id": "618233d62dd2b8ebd567a1d0"
        },
        {
            "label": "C",
            "value": "1950s",
            "_id": "618233d62dd2b8ebd567a1d1"
        },
        {
            "label": "D",
            "value": "1960s",
            "_id": "618233d62dd2b8ebd567a1d2"
        }
    ],
    "__v": 0
}
```

As Validation at this time user the isCorrect is hidden in option object from response 


#### Checking Answer for a Question

POST Request to [http://localhost:5000/api](http://localhost:5000/api) as example :


```json
{
    "id" : "618233d62dd2b8ebd567a1ce",
    "answer" : "1920s"
}
```


```json

{
    "success": false
}

```

#### Saving User Score 

POST Request to [http://localhost:5000/api/score](http://localhost:5000/api/score) as example :


```json
{
    "name":"Vihaan",
    "score" : "45"
}
```


```json
{
    "name": "Vihaan",
    "score": 45,
    "_id": "6182d9f1e71ed10011812112",
    "__v": 0
}

```



#### Get top 10 high scores 

GET Request to [http://localhost:5000/api/score](http://localhost:5000/api/score) as example :


```json
{
    [
    {
        "_id": "6182d9f1e71ed10011812112",
        "name": "Vihaan",
        "score": 45,
        "__v": 0
    },
    {
        "_id": "6182c4bd819538b8aa37a4f2",
        "name": "Saini",
        "score": 0,
        "__v": 0
    },
    {
        "_id": "6182c50a819538b8aa37a4fa",
        "name": "Test",
        "score": 0,
        "__v": 0
    },
    
]
}

```


#### Seeding data from js file to database
- Data folder in the backend directory holds the question data in Question.js file.
- To add this data to database follow steps below
- Navigate to main folder(Quiz App)
- Run Command npm seed



### Frontend is built using React 

- Redux is used for state management throughout application
- Axios is used for communicating with backend
- React Router for routing the components


### Running Frontend Only

1. Navigate to frontend directory
1. Run the command npm install to install all the dependencies 
2. Run : npm start
3. API can be access on localhost:3000/
4. No External Styling libaray is used


#### HomeScreen

- Home Screen can  be accessed on [http://localhost:3000](http://localhost:3000)
- Home screen promps user to enter name 
- As a validation form don't get submitted unless any name is not entered

<p align="center">
  <br/>
  <img  src="https://github.com/nsaini-05/QuizApplication/blob/main/frontend/public/HomeScreen.PNG">
</p>


#### QuestionScreen

- Question Screen can  be accessed on [http://localhost:3000/question](http://localhost:3000/question)
- Question Screen can only be accessed only when the user name is entered on homescreen 
- User can leave quiz anytime, the current score will be saved 


<p align="center">
  <br/>
  <img  src="https://github.com/nsaini-05/QuizApplication/blob/main/frontend/public/QuestionScreen.PNG">
</p>

#### Wrong Answer Screen

- Wrong answer screen is not accessible to user directly
- It will appear only when user choose the wrong option out of 4 options 

<p align="center">
  <br/>
  <img  src="https://github.com/nsaini-05/QuizApplication/blob/main/frontend/public/WrongAnswer.PNG">
</p>


#### Scores Table Screen

- Scores Table Screen can  be accessed on [http://localhost:3000/scoretable](http://localhost:3000/scoretable)
- Table of Highest scores will be presented to user 

<p align="center">
  <br/>
  <img  src="https://github.com/nsaini-05/QuizApplication/blob/main/frontend/public/topscores.PNG">
</p>





#### Running both frontend and backend together

- Make sure dependencies for both frontend and backend is installed
- Navigate to Quiz APP folder
- Run command npm start 
- This script make use of concurrently package manager 




















