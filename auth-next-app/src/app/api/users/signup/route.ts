
import { dbConnection } from "@/config/db.config";
import User from '@/models/users.model'
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
dbConnection();
//Save user Details

export async function POST(request: NextRequest) {
    debugger
    try {
        const reqBody = await request.json();

        const { username, password, email } = reqBody;

        console.log({ reqBody });

        const userData = await User.findOne({ email });

        if (userData) {
            return NextResponse.json({error:"User already exists!"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10);

        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,password:hashedPassword,email
        })

        const savedUser = await newUser.save();
        console.log({ savedUser })
        
        return NextResponse.json({
            message: "User Created Successfully", success: true,savedUser
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
        
    }

    
}