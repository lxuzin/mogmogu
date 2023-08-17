'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Add(props) {
  const router = useRouter();

  return (
    <>
      <div className="container">
        
        
      </div>

      <style jsx>
        {`
          .container {
            background-color: white;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow-y: scroll;
          }
          
        `}
      </style>
    </>
  );
}
