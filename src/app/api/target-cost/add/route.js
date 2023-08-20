import { NextResponse } from "next/server";
const fs = require('fs');

/**
 * @TargetCost
 * {
 *    name
 *    startDate
 *    endDate
 *    requiredCost
 * }
 */

export async function POST(req) {
  const newItem = await req.json();
  if ( !newItem.name || !newItem.startDate || !newItem.endDate || !newItem.requiredCost)
    return NextResponse.json({ error: 'invalid data' });

  const read = fs.readFileSync('./public/data/target-cost.json', 'utf8');
  const newTargetCost = await JSON.parse(read);
  newTargetCost.push(newItem);
  fs.writeFileSync('./public/data/target-cost.json', JSON.stringify(newTargetCost));
  return NextResponse.json(newTargetCost);
}
