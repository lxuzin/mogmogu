import { NextResponse } from "next/server";

/**
 * @TargetCost
 * name
 * startDate
 * endDate
 * requiredCost
 */
const targetCosts = [];

export async function GET(req) {
  return NextResponse.json(targetCosts);
}

export async function POST(req) {
  const targetCost = await req.json();
  console.log(targetCost);

  // check user elements has value
  if ( !targetCost.name || !targetCost.startDate || !targetCost.endDate || !targetCost.requiredCost) {
    return NextResponse.json(`
      # targetCost template
      {
        name: string,
        startDate: Date,
        endDate: Date,
        requiredCost: number,
      }
    `);
  }
  console.log(`new targetCost: ${JSON.stringify(targetCost)}`);
  users.push(targetCost);
  return NextResponse.json(targetCost);
}
