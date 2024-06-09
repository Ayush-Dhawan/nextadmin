"use server";
import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";


export const addUser = async (formData) => {

    
    // Process formData into an object
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        // Ensure that connectToDB handles asynchronous operations correctly
        await connectToDB();
        
        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });

        // Save the new user to the database
        await newUser.save();

        // Revalidate the path and redirect to the users dashboard
        

    } catch (error) {
        // Log the error for debugging
        console.error("Error creating new user:", error.message);
        console.error("Stack Trace:", error.stack);
        // throw new Error("Failed to create new user");
    }finally{
        revalidatePath('/dashboard/users');
        redirect('/dashboard/users');
    }
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err.message);
    //   throw new Error("Failed to create product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };