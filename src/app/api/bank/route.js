import { NextResponse } from "next/server";
const fs = require('fs');

export async function GET(req) {
  const read = fs.readFileSync('./public/data/bankData.json', 'utf8');
  return NextResponse.json(JSON.parse(read));
}