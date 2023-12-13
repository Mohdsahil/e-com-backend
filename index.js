const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv')
const router = require('./src/routes/index');

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })

const app = express();

// Enable cors
app.use(cors());


app.get('/health', (req, res) => {
    let healthCheck = {
        uptime: process.uptime(),
        msg: 'OK',
        timestamp: Date.now(),
        environment: process.env.NODE_ENV,
      };
    try {
        res.status(200).json({
            msg: "Request Success",
            data: healthCheck,
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            data: error,
          });
    }
});

app.get('/', (req, res) => {
    res.status(200).json({
        msg: `Welcom to E-commerce ${process.env.NODE_ENV} server`,
    })
});

app.use('/', router);

const PORT = process.env.PORT || 3001

app.listen(
    PORT,
    console.info(`Server running on port ${PORT}, ${process.env.NODE_ENV} Server`)
)