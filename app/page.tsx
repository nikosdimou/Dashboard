"use client"
import next from "next";
import { useState } from "react";
const ADMIN_USER = "admin";
const ADMIN_PASS = "password123"; // Change this!
export default function Home() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setAuthed(true);
    } else {
      alert("Invalid credentials");
    }
  };
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-lg shadow p-8 flex flex-col gap-4 w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={e => setUser(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
  
  return (
   <></>
   
  );
}
