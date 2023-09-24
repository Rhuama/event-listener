"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Image from "next/image";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth, app } from "@/firebase/firebase";

import logo from "../login/Icon-handle-event.png";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSignOut(e: any) {
    if (confirmPassword !== password) {
      return alert("Senhas diferentes, por favor verificar");
    }

    e.preventDefault();
    createUserWithEmailAndPassword(email, password);

    router.push("/");
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
          <Image alt="logo empresa" width={80} height={80} src={logo} />
          <h2 className="mt-10 text-center text-lg font-bold leading-7 tracking-tight text-white-900">
            Nós somos a handleEvent( ) e é um prazer ter você conosco.
            Realizando o seu cadastro você pode ficar por dentro dos próximos
            eventos de Tecnologia!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Agora insira o seu melhor email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="stevejobsdesouza@gmail.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
        </div>

        <div>
          <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Certo, agora é só escolher uma senha
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
        </div>

        <div>
          <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                E confirmar ela
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <button
            onClick={handleSignOut}
            className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
}
