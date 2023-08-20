import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @Account
 * [
*   {
 *    date
 *    cost
 *    icon : img path
 *    name
 *  },
 * ]
 */

export async function GET(req) {
  const read = fs.readFileSync('./public/data/account.json', 'utf8');
  return NextResponse.json(read);
}

export async function POST(req) {
  const newAccount = await req.json();

  const flag = await newAccount.every(item => {
    if ( !item.date || !item.cost || !item.icon || !item.name)
      return false;
    return true;
  });

  if (!flag) {
    return NextResponse.json({ error: 'invalid data' });
  }
  fs.writeFileSync('./public/data/account.json', JSON.stringify(newAccount));
  return NextResponse.json(newAccount);
}
