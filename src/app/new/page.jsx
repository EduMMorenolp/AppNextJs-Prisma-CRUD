"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Newpage({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleEliminar = async (e) => {

    e.preventDefault();

    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });

    router.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
    };

    if (params.id) {
      console.log(params.id)
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    if (params.id) {
      console.log(params.id)
      fetch(`/api/tasks/${params.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("No se encontraron datos");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTitle(data.title);
          setDescription(data.description);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    }
  }, [params.id]);

  return (
    <div className="p-4 items-center justify-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 ">
        {params.id ? (
          <h1 className="text-2xl font-bold mb-4">Actualizar tarea</h1>
        ) : (
          <h1 className="text-2xl font-bold mb-4">Crear nueva tarea</h1>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Título
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
          {params.id && (
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-4"
              onClick={handleEliminar}
            >
              Eliminar
            </button>
          )}
          <br></br>
          <Link
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            href="/"
          >
            Volver a la página principal
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Newpage;
