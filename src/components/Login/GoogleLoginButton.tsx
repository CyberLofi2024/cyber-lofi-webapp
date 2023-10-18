import { signIn } from 'next-auth/react';
import React from 'react';

function GoogleLoginButton() {
  return (
    <div className="bg-white rounded-lg">
      <button
        onClick={() => {
          signIn('google');
        }}
        className="px-4 py-2 border flex gap-2 rounded-lg border-slate-200 text-slate-700 hover:border-slate-400 hover:shadow-white/25 shadow-lg transition duration-150"
      >
        <img
          className="w-6 h-6"
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
