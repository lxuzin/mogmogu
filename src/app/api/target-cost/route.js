import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @TargetCost
 * [
 *   {
 *    name
 *    startDate
 *    endDate
 *    requiredCost
 *  },
 * ]
 */

export async function GET(req) {
  const read = fs.readFileSync('./public/data/target-cost.json', 'utf8');
  return NextResponse.json(JSON.parse(read));
}

export async function POST(req) {
  const newTargetCost = await req.json();

  const flag = await newTargetCost.every(item => {
    if ( !item.name || !item.startDate || !item.endDate || !item.requiredCost)
      return false;
    return true;
  });

  if (!flag) {
    return NextResponse.json({ error: 'invalid data' });
  }
  fs.writeFileSync('./public/data/target-cost.json', JSON.stringify(newTargetCost));
  return NextResponse.json(newTargetCost);
}
