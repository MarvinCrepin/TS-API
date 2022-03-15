// Wilder Manager
const WilderModel = require("../models/Wilder")
const asyncHandler = require("express-async-handler")
import { Wilder } from '../services/wilders'
import { Request, Response, NextFunction } from "express";
/* const wilderCheck = async (key = {}) => {
  return (await WilderModel.findOne(key)) ? true : false
} */

module.exports = {
  create: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const wilder = new WilderModel(req.body)
    const data = await wilder.save().catch(next)
    res.json({ success: true, data })
  }),

  read: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const data = await WilderModel.find({})
    res.json({ success: true, data })
  }),

  update: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // On utilise la méthode findByIdAndDelete afin de retrouver le document et le supprimer
    // On lui passe en paramètre l'id, le payload (les éléments du document à mettre à jour) ainsi qu'un tableau d'options optionnel
    const id = req.params.id
    const data = await WilderModel.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json({ success: true, data })
  }),

  delete: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // On utilise la méthode findByIdAndDelete afin de retrouver le document et le supprimer
    const data = await WilderModel.findByIdAndDelete(req.params.id)
    res.status(200).json(data)
  }),
}
