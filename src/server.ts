import express from 'express';

const app = express();

app.get('/', (request, response)=>{
  return response.json({message: 'ok ok ok'});
})

app.listen(3334);