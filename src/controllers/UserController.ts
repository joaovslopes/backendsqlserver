import { Request, Response } from 'express';
import { prisma } from '../database';

export default{
    async createUser(request: Request, response: Response){
        try {
            const { memb___id, memb__pwd } = request.body;
            const userExists = await prisma.

        } catch (error) {
            
        }
    }
}