import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import { QuizData } from './interfaces'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = 8000
const app = express()

app.get("/quiz/item", async(req: Request, res: Response) => {
    try {
        // @ts-ignore
        const response: AxiosResponse = await axios.get(process.env.URL,
        {
            headers: {
                "X-Cassandra-Token": process.env.TOKEN,
                "accept" : "application/json"
            }
        }
        )
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data['2abb02e9-8aea-4ef6-a662-a13293f202d6']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    }
    catch (e) {
        console.log("Something went wrong and here is why: ", e)
    }
})

app.listen(PORT, () => console.log('server is running on port' + PORT))