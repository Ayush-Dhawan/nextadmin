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

export const fetchUser = async (id) => {
    console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };

  export const fetchProduct = async (id) => {
    try {
      connectToDB();
      const product = await Product.findById(id);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
  };
  

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
