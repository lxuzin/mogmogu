const fs = require('fs');

const acc = JSON.parse(fs.readFileSync('./public/data/account.json', 'utf8'));

for (let i = 1; i < 32; i++)
{
  console.log(`2023-08-${i}`);
  const perDate = acc.filter(x => +(x.date.split("-")[2]) === i);
  console.log(perDate);
  if (perDate.length === 0)
    continue;

  const totalCost = perDate.reduce((acc, cur) => acc + cur.cost, 0);
  console.log(totalCost);
}