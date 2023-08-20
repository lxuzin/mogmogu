import { NextResponse } from "next/server";

/**
 * @Calendar
 * dateStart
 * dateEnd
 * cost
 * food
 * place
 * diary
 */
const calendar = [];

export async function GET(req) {
  return NextResponse.json(calendar);
}

export async function POST(req) {
  const plan = await req.json();

  // check calendar elements has value
  if ( !plan.startDate || !plan.endDate || !plan.cost || !plan.food || !plan.place || !plan.diary) {
    return NextResponse.json(`
      # plan template
      {
        startDate: Date,
        endDate: Date,
        cost: number,
        food: string,
        place: string,
        diary: string,
      }
    `);
  }
  console.log(`new plan: ${JSON.stringify(plan)}`);
  calendar.push(plan);
  return NextResponse.json(plan);
}
