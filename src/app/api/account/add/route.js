import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @Account
 * {
 *  date
 *  cost
 *  icon : img path
 *  name
 * }
 */

export async function POST(req) {
  const newItem = await req.json();
  console.log(newItem);
  if (!newItem.date || !newItem.cost || !newItem.icon || !newItem.name)
    return NextResponse.json({ error: 'invalid data' });

  const read = fs.readFileSync('./public/data/account.json', 'utf8');
  const newAccount = await JSON.parse(read);
  newAccount.push(newItem);
  fs.writeFileSync('./public/data/account.json', JSON.stringify(newAccount));
  return NextResponse.json(newAccount);
}
