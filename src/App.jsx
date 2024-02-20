
import { useState } from "react";
import SignInForm from "./form/SignInForm";
import SignUpForm from "./form/SignUpForm";

function App() {
  const [isLogin, setLogin] = useState(false);

  function handleClick() {
    setLogin(!isLogin);
  }

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="relative bg-white p-8 rounded shadow-md">
        <button
          onClick={handleClick}
          className="absolute top-0 right-2  text-black px-3 py-1 rounded"
        >
          {!isLogin ? "Sign In" : "Sign Up"}
        </button>
        {!isLogin ? <SignUpForm /> : <SignInForm />}
      </div>
    </main>
  );
}

export default App;
