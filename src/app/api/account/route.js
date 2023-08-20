import { NextResponse } from "next/server";

/**
 * @Account
 * date
 * cost
 * icon : img path
 * name
 */
const account = [];

export async function GET(req) {
  return NextResponse.json(item);
}

export async function POST(req) {
  const item = await req.json();

  // check calendar elements has value
  if ( !item.date || !item.cost || !item.icon || !item.name) {
    return NextResponse.json(`
      # Account item template
      {
        date: Date,
        cost: number,
        icon: string,
        name: string,
      }
    `);
  }
  console.log(`new item: ${JSON.stringify(item)}`);
  account.push(item);
  return NextResponse.json(item);
}
