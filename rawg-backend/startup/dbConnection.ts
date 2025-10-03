import { AppDataSource } from "../data-source";

const connectToDB = async () => {
    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err);
        });
};

export default connectToDB;
