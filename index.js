const express = require('express');
const setAlarm = require("./Controller/setAlarm");
const evaluate = require("./Controller/evaluateExp");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());
app.use(express.json());

const port = 4000;

app.post("/setAlarm",function (req,res) {
    const result = setAlarm(req.body);
    return res.json(result);
})

app.post("/evaluate", function(req,res)  {
    console.log(req);
    const result = evaluate(req.body.exp);
    console.log("RESULT========",result);
    return res.json(result);
})

app.listen(port, () => {
    console.log("Server is listening on ", port)
});