### Test client
- clone project
- navigate to project directory and run 
```shell script
npm install
node app
```
#### POST Data
- check format of all data in `app.js`. The server expects data in that exact format. 
    Check on the case especially and inheritance.
- NB: For subject groups, server expects science group to be name `science`.

### Response Data
- Server responds with JSON object. The JSON object is the array of **allocations** 
  that you passed appended with `allocation.periods` which is the day and time of day for the
  allocation  and `allocation.room` for subjects with labs.
- Format of `allocation.periods` and `allocation.room` is as follows:
````javascript
//form2 physics
//Periods
allocation.periods = 
{
  '1'/*day*/: [
    { id: 8, from: '15:00:00', to: '16:00:00', toBreak: false }, //time of daya
    { id: 9, from: '16:00:00', to: '17:00:00', toBreak: false }
  ],
  '2': [],
  '3': [
    { id: 1, from: '08:00:00', to: '09:00:00', toBreak: false },
    { id: 2, from: '09:00:00', to: '09:00:00', toBreak: false }
  ],
  '4': [ { id: 3, from: '10:00:00', to: '11:00:00', toBreak: false } ],
  '5': [
    { id: 1, from: '08:00:00', to: '09:00:00', toBreak: false },
    { id: 2, from: '09:00:00', to: '09:00:00', toBreak: false }
  ]
}

//Labs
allocation.room = 
{
  room: { id: 1, subject_id: 4, name: 'PL1', subject: null },
  day: 3,
  period1: { id: 1, from: '08:00:00', to: '09:00:00', toBreak: false },
  period2: { id: 2, from: '09:00:00', to: '09:00:00', toBreak: false }
}

````
