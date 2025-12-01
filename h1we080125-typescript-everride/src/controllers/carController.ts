import { request, response } from "express";
import { prisma } from "../prisma.js";

/**
 * 
 * @param req 
 * @param res 
 * @returns Array
 */

export const getRecords = async (req: Request, res: Response) =>  {
  try {
    const data = await prisma.car.findMany({
        include:{
            brand: true,
        }
    });
    return.res.status(200).json(data);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "failed to fetch cars" });
    }
}; 
/**
 * 
 * @param req 
 * @param res 
 * @returns Object
 */ 
export getRecords = async (req: Request, res: Response) => {
    const id = Number(req:.params.id);

    if(!id){
        return res.status(400).json({ error: "Id is missing" });
    }
    try {
        const data = await prisma.car.findUnique({
            where: { id },
            select: {
                id: true,
                model: true,
                brand: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "failed to fetch car" });
    }       
};

/**
 * 
 * @param req 
 * @param res 
 * @returns Objects
 */

export const createRecord = async (req: Request, res: Response) => {
    const {category, model, brandId, year, price, fueltype } = req.body;

    if(!category || !model || !brandId || !year || !price || !fueltype){
        return res.status(400).json({ error: "All data is required" });
}
    try {
        const data = await prisma.car.create({
            data: {
                category,
                brandId: Number(brandId),
                model,
                year: Number(year),
                price,
                fueltype,
            },
        });
        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "something went wrong" })
    }
};

/**
 * 
 * @param req 
 * @param res 
 * @returns Object
 */

export const updateRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if(!id){
        return res.status(400).json({ error: "Id is missing" });
    }
    const { category, model, brandId, year, price, fueltype } = req.body;

    if(!category || !model || !brandId || !year || !price || !fueltype){
        return res.status(400).json({ error: "All data is required" });
    }       
    try {
        const data = await prisma.car.update({
            where: { id },
            data: {     
                category,
                brand,
                model,
                year: Number(year),
                price,
                fueltype,   
            },
        });
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "somthing went wrong" });
    }
};
export const deleteRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if(!id){
        return res.status(400).json({ error: "Id is missing" });
    }   
    try {
        const data = await prisma.car.delete({
            where: { id },
        });
         res.status(200).json(data)({
         message: 'record deleted',
         deletedId: id,
        }); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete record" })
    }
};
