import mongoose from 'mongoose';
import 'dotenv/config'


//const uri = "mongodb+srv://aneeshsherlin:open123@cluster0.keoicua.mongodb.net/";

export async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);

        const conn = mongoose.connection;

        conn.on('connected', () => {
            console.log("DB Connected Successfully...");
        });

        conn.on('error', (err) => {
            console.error("DB Connection Error:", err);
            process.exit(1); // Exit the application with an error code
        });

        conn.on('disconnected', () => {
            console.log("DB Disconnected");
        });
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Exit the application with an error code
    }
}
