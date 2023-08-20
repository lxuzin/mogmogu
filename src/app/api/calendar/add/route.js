import { NextResponse } from "next/server";
const fs = require('fs');


/**
 * @Calendar
 *  {
 *    dateStart
 *    dateEnd
 *    cost
 *    food
 *    place
 *    diary
 *  },
 */

export async function POST(req) {
  const item = await req.json();
  if (!item.dateStart || !item.dateEnd || !item.cost || !item.food || !item.place || !item.diary)
    return NextResponse.json({ error: 'invalid data' });

  const read = fs.readFileSync('./public/data/calendar.json', 'utf8');
  const calendar = await JSON.parse(read);
  calendar.push(item);
  fs.writeFileSync('./public/data/calendar.json', JSON.stringify(calendar));
  return NextResponse.json(calendar);
}
