import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createUser, getUserId } from "./action";
import {connectToPostgres} from "./connect";

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.get("/user/:id", async (req: Request, res: Response) => {
    const { id } = req.params
    const idNumber = id as unknown as number
    const user = await getUserId(idNumber)
    res.json(user)
});

app.post("/user", async (req: Request, res: Response) => {
  console.log(req.body)
  const user = await createUser(req.body)
  res.json(user)
});
  


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
setTimeout(()=>{
  connectToPostgres()
})