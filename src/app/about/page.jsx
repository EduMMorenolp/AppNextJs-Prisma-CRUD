import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">Acerca de la Aplicación de Tareas</h1>
      <p className="text-lg mb-4">
        La Aplicación de Tareas es una aplicación diseñada para ayudarte a gestionar tus tareas diarias de manera eficiente. Con esta aplicación, puedes crear, actualizar y eliminar tareas fácilmente, manteniendo un seguimiento de lo que necesitas hacer.
      </p>
      <p className="text-lg mb-4">
        ¡Esperamos que disfrutes usando nuestra aplicación y que te ayude a alcanzar tus objetivos de manera más eficiente!
      </p>
      <Link className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" href="/">
       Volver a la página principal
      </Link>
    </div>
  );
}