import { Request, Response, NextFunction } from "express";

module.exports = {
     error : (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.send(err)
    } 
}