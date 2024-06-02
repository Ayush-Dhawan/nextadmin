import { User } from "./models";
import { connectToDB } from "./utils";

export async function getAllUsers(q) {
    const regex = new RegExp(q, "i")
    try {
        await connectToDB(); 
        const users = await User.find({username: {$regex: regex}});
        return users;
    } catch (error) {
        throw new Error(`getAllUsers: ${error.message}`);
    }
}
