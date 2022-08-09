


function woodCalculator(chairQuantity, tableQuantity, BedQuantity) {
    const perChairWood = 3;
    const perTableWood = 6;
    const perBedWood = 35;

    const charWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = BedQuantity * perBedWood;
    const consumedWood = charWood + tableWood + bedWood;

    return consumedWood;
}
const totalWood = woodCalculator(0, 0, 2);
console.log(totalWood);
