import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { z } from "zod";
import { useAuth } from "@/contextApi/AuthContext";
import logo from "/vite.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); 

  const { login, error } = useAuth(); 

  const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const validationResult = loginSchema.safeParse({ email, password });

    if (validationResult.success) {
      const loginResult = await login(email, password);
      if (!loginResult) {
        navigate("/dashboard"); // Login successful, navigate to dashboard
      }
    } else {
      const errors = validationResult.error.errors;
      setEmailError(errors.find((e) => e.path[0] === "email")?.message || "");
      setPasswordError(
        errors.find((e) => e.path[0] === "password")?.message || ""
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center pt-24 ">
      <div className="w-full grid max-w-[700px]">
        <img src={logo} alt="logo" className="w-16 mb-4" />
      </div>
      <div className="w-full grid grid-cols-2 max-w-[700px] pb-10 ">
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium mb-4">Sign in</h1>
          <div className="">
            <span className="text-gray-600 text-sm ">
              Not your computer? Use Guest mode.
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mb-18">
          {error && <p className="text-sm text-red-500">{error}</p>} {/* Exibe o erro */}
          <div>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-4 border rounded-md text-sm ${
                  emailError ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent`}
                placeholder="Your email"
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-xs mt-1 ml-1">{emailError}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-4 border rounded-md text-sm  ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent`}
                placeholder="Password"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1 ml-1">{passwordError}</p>
            )}
          </div>

          <div className="text-right mb-8">
            <Link
              to="/"
              className="text-zinc-600 hover:text-zinc-800 font-medium text-[12px]"
            >
              Forgot password?
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="cursor-pointer text-sm w-full bg-[#010101] hover:bg-[#010103] text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <div className="w-full mx-auto max-w-[700px] flex justify-between space-x-6 text-xs text-gray-600">
        <select className="bg-transparent focus:outline-none">
          <option>Portuguese (Portugal)</option>
        </select>
        <div className="flex gap-6">
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}
