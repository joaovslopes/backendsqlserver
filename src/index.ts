import Express, { response } from 'express';
import { request } from 'http';

const app = Express();

app.use(Express.json());
const PORT = 8000;

app.get('/', (request, response) => {
    return response.send({message: 'Hello World'});
});

app.listen(PORT, () => {
    console.log('Server is running ${PORT}')
})