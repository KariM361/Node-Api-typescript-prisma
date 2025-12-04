import { Request, Response } from 'express';
import { prisma } from '../prisma.js';


export const deleteCategory = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  
  try {
   const deleted = await prisma.category.delete({
      where: { id }
    })

    res.status(deleted).json({
      message: 'Category deleted',
      deletedId: id
    })
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error: ' category not found' })
  }
}
