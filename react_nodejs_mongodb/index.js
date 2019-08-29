const express = require('express');
const asyncHandler = require('express-async-handler');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
module.exports = router;





// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       date: "2019-05-30T17:30:31.098Z",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only Javascript",
//       date: "2019-05-30T18:39:34.091Z",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       date: "2019-05-30T19:20:14.298Z",
//       important: true
//     }
// ];

// const generateId = () => {
//     const maxId = notes.length > 0
//     ? Math.max(...notes.map(n => n.id))
//     : 0;
//     return maxId + 1;  
// }

// const requestLogger = (request, response, next) => {
//     console.log(`Method: ${request.method} -- Path: ${request.path} -- Body: ${request.body}`);
//     next();
// }

// app.use(requestLogger);
// app.use(bodyParser.json());

router.route('/notes').post(asyncHandler(insert));


// app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>');
// });

// app.get('/notes', (request, response) => {
//     response.send(notes);
// });

// app.get('/notes/:id', (request, response) => {
//     const note = notes.find(note => note.id === Number(request.params.id));
//     if (!note) {
//         response.status(404).end();
//     }
//     response.send(note);
// });


// app.post('/notes', (request, response) => {
//     const body = request.body;

//     if (!body.content) {
//         response.status(400).json({
//             errorMsg: 'Content missing'
//         });
//     }

//     const note = await insert(body);
//     response.send(note);
// });

async function insert(request, response) {
    const body = request.body;

    if (!body.content) {
        response.status(400).json({
            errorMsg: 'Content missing'
        });
    }

    const note = await Note.save(body);
    response.send(note);
}



// app.delete('/notes/:id', (request, response) => {
//     notes = notes.filter(note => note.id !== Number(request.params.id));
//     response.status(204).end();
// });

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
}
 
app.use(unknownEndpoint);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
