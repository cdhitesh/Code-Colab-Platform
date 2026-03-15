import userModel from '../models/user.model.js';

export const createUser = async ({
    email, password
}) => {
    if (!email || !password) throw new Error("Missing email or password");
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({ email, password: hashedPassword });
    return user;
}

export const getAllUsers = async ({ userId }) => {
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}
