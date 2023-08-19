import { NextResponse } from "next/server";


/**
 * @User
 * nickname
 * password
 * monthCost
 * monthDateCnt
 * coupleStartDate
 */
const users = [
  {
    nickname: 'test',
    password: 'test',
    monthCost: 100000,
    monthDateCnt: 10,
    coupleStartDate: new Date('2021-08-15'),
  },
];

export async function GET(req) {
  return NextResponse.json(users);
}

export async function POST(req) {
  const user = await req.json();

  // check user elements has value
  if ( !user.nickname || !user.password || !user.monthCost || !user.monthDateCnt || !user.coupleStartDate) {
    console.log(user);
    return NextResponse.json(`
      # user template
      {
        nickname: string,
        password: string,
        monthCost: number,
        monthDateCnt: number,
        coupleStartDate: Date,
      }
    `);
  }
  if (users.find(x => x.nickname === user.nickname)) {
    return NextResponse.json(`user already exists: ${user.email}`);
  }
  console.log(`new user: ${JSON.stringify(user)}`);
  users.push(user);
  return NextResponse.json(user);
}


const dummy = [
  {
    nickname: 'test',
    password: 'test',
    monthCost: 100000,
    monthDateCnt: 10,
    coupleStartDate: new Date('2021-08-15'),
  }
]