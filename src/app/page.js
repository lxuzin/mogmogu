'use client'
import { redirect } from 'next/navigation'
import { useState } from 'react';

export default function Index() {
  redirect('/login');

  return (
    <div>
      <h1>Redirect to login</h1>
    </div>
  )
}
