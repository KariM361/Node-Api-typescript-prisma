import { Request, Response } from 'express';
import { prisma } from '../prisma.js';


export const deleteCategory = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (!id) {
    return res.status(400).json({ error: 'Id is missing '})
  }

  try {
    await prisma.category.delete({
      where: { id }
    })

    res.status(200).json({
      message: 'Category deleted',
      deletedId: id
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to delete category' })
  }
}
