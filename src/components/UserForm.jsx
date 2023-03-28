import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/auth";
import compass from "../../public/compass.jpg";

const UserForm = ({ login = false }) => {
  const { signUp, logIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      setEmail("");
      setPassword("");
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center">
        {login ? "Log in" : "Sign up now!"}
      </h2>
      <Image
        src={compass}
        alt="company logo"
        className="w-auto h-[100px] block mx-auto mt-8"
      />
      <form
        className="flex flex-col items-center mt-12 gap-8"
        onSubmit={login ? handleLogIn : handleSignUp}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="border w-[400px] rounded-lg h-10 pl-2"
            placeholder="Please enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="text-center">
            Password
          </label>
          <input
            type="password"
            name="password"
            min={8}
            required
            className="border w-[400px] rounded-lg h-10 pl-2"
            placeholder="Please enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn confirm-btn mt-10 w-24">
          {login ? "Log in" : "Sign up"}
        </button>
      </form>
    </>
  );
};

export default UserForm;
