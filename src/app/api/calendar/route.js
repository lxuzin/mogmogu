import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @Calendar
 * [
 *  {
 *    startDate
 *    endDate
 *    cost
 *    food
 *    place
 *    diary
 *  },
 * ]
 */

export async function GET(req) {
  const read = fs.readFileSync('./public/data/calendar.json', 'utf8');
  return NextResponse.json(JSON.parse(read));
}

export async function POST(req) {
  const calendar = await req.json();

  const flag = await calendar.every(item => {
    if (!item.startDate || !item.endDate || !item.food || !item.place || !item.diary|| !item.keyword)
      return false;
    return true;
  });

  if (!flag) {
    return NextResponse.json({ error: 'invalid data' });
  }
  fs.writeFileSync('./public/data/calendar.json', JSON.stringify(calendar));
  return NextResponse.json(calendar);
}
