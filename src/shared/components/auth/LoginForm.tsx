import { loginAction } from "@/app/(auth)/login/actions";

export default function LoginForm() {
    return (
        <form action={loginAction}>
            <div>
                <label>Email</label>

                <input
                    name="email"
                    type="email"
                    required
                />
            </div>

            <div>
                <label>Password</label>

                <input
                    name="password"
                    type="password"
                    required
                />
            </div>

            <button type="submit">
                Login
            </button>
        </form>
    );
}