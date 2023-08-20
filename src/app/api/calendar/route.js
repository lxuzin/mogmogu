import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @Calendar
 * [
 *  {
 *    dateStart
 *    dateEnd
 *    cost
 *    food
 *    place
 *    diary
 *  },
 * ]
 */

export async function GET(req) {
  const read = fs.readFileSync('./public/data/calendar.json', 'utf8');
  return NextResponse.json(read);
}

export async function POST(req) {
  const calendar = await req.json();

  const flag = await calendar.every(item => {
    if (!item.dateStart || !item.dateEnd || !item.cost || !item.food || !item.place || !item.diary)
      return false;
    return true;
  });

  if (!flag) {
    return NextResponse.json({ error: 'invalid data' });
  }
  fs.writeFileSync('./public/data/calendar.json', JSON.stringify(calendar));
  return NextResponse.json(calendar);
}
