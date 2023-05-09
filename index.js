const express = require('express')
const bodyParser = require('body-parser');

const app = express()
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000

app.post('/find_duplicate', (req, res) => {
    const numbers = req.body.numbers;
    let count ={}
    let duplicate = {}
    let resultStyling = []
    // Function to search duplicate by complexity O(n/p)
    // where n is the number of elements, p number of nucleus of PC
    numbers.forEach(element => {
        count[element] = count[element] ? count[element] + 1 : 1 
        if(count[element] > 1)
            duplicate[element] = count[element]
    });
    // Adding style to result
    for (const [key, value] of Object.entries(duplicate)) {
        resultStyling.push({number: key, count: value});
    }

    res.send({
        status: 200,
        raw: {
            duplicate,
        },
        data: {
            resultStyling,
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

