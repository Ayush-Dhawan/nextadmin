import { Product, User } from "./models";
import { connectToDB } from "./utils";

export async function getAllUsers(q, page) {
    const regex = new RegExp(q, "i")

    const ITEMS_PER_PAGE = 2;
    try {
        await connectToDB(); 
        const count = await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return {users, count};
    } catch (error) {
        throw new Error(`getAllUsers: ${error.message}`);
    }
}

export async function getAllProducts(q, page) {
    const regex = new RegExp(q, "i")

    const ITEMS_PER_PAGE = 2;
    try {
        await connectToDB(); 
        const count = await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return {products, count};
    } catch (error) {
        throw new Error(`getAllProducts: ${error.message}`);
    }
}
