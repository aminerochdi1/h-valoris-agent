'use client'; 

import Image from 'next/image';
import { Standard } from "@typebot.io/react";
import logo from '../public/assets/img/logo.png'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      
      <header className="mb-12">
      <Image 
          src={logo}
          alt="H Valoris Logo" 
          width={200} 
          height={60} 
          className="object-contain"
        />
        <h1 className="mt-5 text-3xl font-extrabold text-gray-800">
          H Valoris Assistant
        </h1>
      </header>

      <main className="flex-grow flex items-start justify-center w-full max-w-lg">
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg w-full">
          <button className="text-center text-gray-600 mb-6">
            Chat with the H Valoris Assistant.
          </button>
          
          <Standard
            typebot="h-valoris-m36ge86"
            apiHost="https://typebot.io"
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      </main>
      
    </div>
  );
}