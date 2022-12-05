import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

const PORT = 8000
const app = express()

app.get("/quiz/item", async(req: Request, res: Response) => {
    try {
        const respons : AxiosResponse = await axios.get("https://08b96e2e-44eb-4335-9944-abf0d8a36672-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/quirky",
        {
            headers: {
                "X-Cassandra-Token: AstraCS:MbeGukAIEqZIoHykJbrvnidL:273d2e106ec957ebe22cd8b75b3d5f8efcace2f29f632387f40c05b234b57cfd",
                "accept" : "application/json"
            }
        }
        )
    }
})

app.listen(PORT, () => console.log('server is running on port' + PORT))