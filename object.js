const phones = [


    { name: "samsang", camera: "12px", storage: "64GB", ram: "16GB", price: 27000 },
    { name: "oppo", camera: "12px", storage: "64GB", ram: "16GB", price: 21000 },
    { name: "iphone", camera: "12px", storage: "64GB", ram: "16GB", price: 5000 },
    { name: "hitaci", camera: "12px", storage: "64GB", ram: "16GB", price: 22000 },
    { name: "nokia", camera: "12px", storage: "64GB", ram: "16GB", price: 25000 },
    { name: "xaomi", camera: "12px", storage: "64GB", ram: "16GB", price: 21000 },
    { name: "walton", camera: "12px", storage: "64GB", ram: "16GB", price: 18000 },
    { name: "vivo", camera: "12px", storage: "64GB", ram: "16GB", price: 24000 }
];

function cheappestPhone(phones) {
    let selected = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < selected.price) {
            selected = phone;
        }
    }
    return selected;
}

const cheappest = cheappestPhone(phones);
console.log(cheappest);