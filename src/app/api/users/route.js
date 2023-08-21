import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @User
 * [
 *   {
    nickname
    password
    monthCost
    monthDateCnt
    coupleStartDate
 *  },
 * ]
 */

export async function GET(req) {
  const read = fs.readFileSync('./public/data/users.json', 'utf8');
  return NextResponse.json(JSON.parse(read));
}

export async function POST(req) {
  const newUsers = await req.json();

  // const flag = newUsers.every(item => {
  //   if (!item.nickname || !item.password || !item.monthCost || !item.monthDateCnt || !item.coupleStartDate) {
  //     console.log("맞아?")
  //     return false;
  //   }
    
  //   return true;
  // });
  // if (!flag) {
    // return NextResponse.json({ error: 'invalid data' });
  // }
  fs.writeFileSync('./public/data/users.json', JSON.stringify(newUsers));
  return NextResponse.json(newUsers);
}
