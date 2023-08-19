import { NextResponse } from "next/server";

/**
 * @BankData
 * date
 * cost
 * icon : img path
 * name
 */
const bankData = [];

export async function GET(req) {
  return NextResponse.json(bankData);
}

export async function POST(req) {
  const data = await req.json();

  // check calendar elements has value
  if ( !data.date || !data.cost || !data.icon || !data.name) {
    return NextResponse.json(`
      # BankData item template
      {
        date: Date,
        cost: number,
        icon: string,
        name: string,
      }
    `);
  }
  console.log(`new data: ${JSON.stringify(data)}`);
  bankData.push(data);
  return NextResponse.json(data);
}
