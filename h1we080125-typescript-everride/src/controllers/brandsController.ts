import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const deleteBrand = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (!id) {
    return res.status(400).json({ error: 'Id is missing '})
  }

  try {
    await prisma.brand.delete({
      where: { id }
    })

    res.status(200).json({
      message: 'Brand deleted',
      deletedId: id
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to delete brand' })
  }
}
