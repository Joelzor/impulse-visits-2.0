import { useState } from "react";
import { useAuthContext } from "../context/auth";
import { useRouter } from "next/router";

const UserForm = () => {
  const { signUp } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(email, password);

    setEmail("");
    setPassword("");
    router.push("/home");
  };

  return (
    <>
      <h2 className="text-3xl text-center">Sign up now!</h2>
      <form
        className="flex flex-col items-center mt-24 gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="border w-[300px] rounded-lg h-8 pl-2"
            placeholder="Please enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="text-center">
            Password:
          </label>
          <input
            type="password"
            name="password"
            min={8}
            required
            className="border w-[300px] rounded-lg h-8 pl-2"
            placeholder="Please enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn confirm-btn mt-10">
          Sign up
        </button>
      </form>
    </>
  );
};

export default UserForm;
