import data from './BankData.json';
import { NextResponse } from "next/server";

const banks = data;

export async function GET(req) {
  console.log(data);
  return NextResponse.json(data);
}
