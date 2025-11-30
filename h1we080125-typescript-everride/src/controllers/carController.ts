import { request, response } from "express";
import { prisma } from "../prisma.js";

export const getRecords = async (req: Request, res: Response) =>  {
  try {
    const data = await prisma.car.findMany(); 
    return.res.status(200).json(data);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "failed to fetch cars" });
    }
}   

export const createRecord = async (req: Request, res: Response) => {
    console.log(register,body);
};
