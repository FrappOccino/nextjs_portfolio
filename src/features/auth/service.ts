// features/auth/service.ts
import * as repository from "./repository";

type LoginInput = {
    email: string;
    password: string;
};

export async function login(data: LoginInput) {
    const user = await repository.findByEmail(data.email);

    if (!user) {
        // throw new Error("Invalid credentials");
        return {
            success: false,
            message: "Invalid credentials",
        };
    }

    // return user;
    return {
        success: true,
        user,
    };
}