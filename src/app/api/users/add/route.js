import { NextResponse } from "next/server";
const fs = require('fs');


/**
 * @User
  * {
    nickname
    password
    monthCost
    monthDateCnt
    coupleStartDate
 *  },
 */

export async function POST(req) {
  const user = await req.json();
  if ( !user.nickname || !user.password || !user.monthCost || !user.monthDateCnt || !user.coupleStartDate)
    return NextResponse.json({ error: 'invalid data' });

  const read = fs.readFileSync('./public/data/users.json', 'utf8');
  const users = await JSON.parse(read);
  users.push(user);
  fs.writeFileSync('./public/data/users.json', JSON.stringify(users));
  return NextResponse.json(users);
}
