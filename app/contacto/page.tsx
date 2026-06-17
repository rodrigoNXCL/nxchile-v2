"use client";

import { useState } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "bedd3dce-72f7-448f-8b03-3b36a4454d27", // 
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-4">Contacto</h1>
        <p className="text-center text-gray-500 mb-12">¿Quieres mejorar tu operación? Hablemos.</p>
        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
              <textarea
                rows={4}
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              ></textarea>
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                  ✅ Mensaje enviado correctamente. Te responderemos pronto.
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  ❌ Error al enviar. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>

            <div className="mt-8 text-sm text-gray-500 text-center">
              <p>Email: contacto@nxchile.com | Tel: +56 9 7741 2178</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
