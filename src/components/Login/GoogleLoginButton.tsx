import { signIn } from "next-auth/react";
import React from "react";

function GoogleLoginButton() {
  return (
    <div className="w-fit rounded-lg bg-white">
      <button
        onClick={() => {
          signIn("google", { redirect: false });
        }}
        className="flex gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 shadow-lg transition duration-150 hover:border-slate-400 hover:shadow-white/25"
      >
        <img
          className="h-6 w-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
}

export default GoogleLoginButton;
