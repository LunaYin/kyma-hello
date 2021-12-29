const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.use((req,resp,next) => {
    console.log('%s', req);
    next();
})

app.get('/', (req,resp) => {
    resp.send('hello, world');
});

app.listen(PORT,() => {
    console.log('Server running on PORT %d', PORT);
});
