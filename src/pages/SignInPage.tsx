import React, { useState } from 'react';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null); // Estado para erros gerais

  const handleEmailBlur = () => {
    const result = signInSchema.safeParse({ email });
    setEmailError(result.success ? null : result.error.errors[0].message);
  };

  const handlePasswordBlur = () => {
    const result = signInSchema.safeParse({ password });
    setPasswordError(result.success ? null : result.error.errors[0].message);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null); // Limpa erros gerais antes da nova tentativa

    const validationResult = signInSchema.safeParse({ email, password });

    if (validationResult.success) {
      // Aqui você faria a lógica de login (enviar dados para o servidor, etc.)
      console.log("Login successful!", validationResult.data);

      // Exemplo de simulação de erro do servidor (substitua pela sua lógica real)
      setTimeout(() => {
        setGeneralError("Invalid email or password."); // Mensagem de erro do servidor
      }, 1000); // Simula um atraso de 1 segundo
    } else {
      // Lida com erros de validação do Zod (se necessário, além dos onBlur)
      console.error("Validation errors:", validationResult.error.errors);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        {generalError && <p className="text-red-500 mb-4">{generalError}</p>} {/* Exibe erro geral */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <a
              href="#" // Substitua pelo link correto
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;