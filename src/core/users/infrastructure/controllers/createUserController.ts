

import { CreateUserUseCase } from "../../applications/createUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  createUser = async (req: Request,res: Response): Promise<Response> => {


    try {
      const response = await this.createUserUseCase.createUser();
      return res.status(201).json({
        status: "ok",
        code: 200,
        response: response,
      });
    } catch (error) {
      return res.status(201).json({
        status: "error",
        code: 401,
        response: error,
      });
    }
  };
}
