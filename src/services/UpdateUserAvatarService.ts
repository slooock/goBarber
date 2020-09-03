import { getRepository } from 'typeorm';
import path from 'path';
import uploadConfig from '../config/upload';
import User from '../models/User';
import fs from 'fs';
import AppError from '../errors/AppError';

interface Request{
  user_id: string;
  avatarFilename: string;
}
class UpdateUserAvatarService {
  public async execute({user_id, avatarFilename}: Request ): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if(!user) {
      throw new AppError('Only uthenticated users can chage avatar.', 401);
    }

    if(user.avatar) {
      //deletar avatar anterior
      const userAvatarFilePath =  path.join(uploadConfig.directory, user.avatar);
      //verifica se arquivo existe
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists){
        //apaga arquivo 
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;