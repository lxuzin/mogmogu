import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @Calendar
 *  {
    * keyword
 *    startDate
 *    endDate
 *    cost
 *    food
 *    place
 *    diary
 *  },
 */

export async function GET() {
  const account = JSON.parse(fs.readFileSync('./public/data/account.json', 'utf8'));
  return NextResponse.json(account.filter(x => x.startDate === '2023-08-20'));
}

export async function POST(req) {

  const item = await req.json();
  if (!item.startDate || !item.endDate || !item.food || !item.place || !item.diary || !item.keyword) {
    return NextResponse.json({ error: 'invalid data' });
  }

  const read = fs.readFileSync('./public/data/calendar.json', 'utf8');
  const calendar = await JSON.parse(read);
  calendar.push(item);
  fs.writeFileSync('./public/data/calendar.json', JSON.stringify(calendar));
  return NextResponse.json(calendar);
}
