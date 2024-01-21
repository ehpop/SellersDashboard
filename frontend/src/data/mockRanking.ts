export type offer = {
    name: string,
    thumbnail: string,
    soldUnits: number,
    revenue: number,
    uniqueViews: number
}

type rankingForAllUsers = {
    [key: string]: Array<offer>
}

const mockRankingCpu: Array<offer> = [
    {
        name: "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        thumbnail: "https://images.morele.net/i256/9643517_4_i256.jpg",
        soldUnits: 120,
        revenue: 250000,
        uniqueViews: 550
    },
    {
        name: "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        thumbnail: "https://images.morele.net/i256/12668825_0_i256.jpg",
        soldUnits: 90,
        revenue: 180000,
        uniqueViews: 500
    },
    {
        name: "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        thumbnail: "https://images.morele.net/i256/7267026_0_i256.jpg",
        soldUnits: 70,
        revenue: 120000,
        uniqueViews: 400
    },
    {
        name: "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        thumbnail: "https://images.morele.net/i256/10120243_0_i256.jpg",
        soldUnits: 50,
        revenue: 70000,
        uniqueViews: 300
    },
    {
        name: "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        thumbnail: "https://images.morele.net/i256/10120243_0_i256.jpg",
        soldUnits: 30,
        revenue: 40000,
        uniqueViews: 200
    },
    {
        name: "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        thumbnail: "https://images.morele.net/i256/11788491_5_i256.jpg",
        soldUnits: 15,
        revenue: 15000,
        uniqueViews: 75
    },
    {
        name: "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        thumbnail: "https://images.morele.net/i256/7267024_0_i256.jpg",
        soldUnits: 7,
        revenue: 7500,
        uniqueViews: 30
    },
    {
        name: "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, OEM (100-000000927)",
        thumbnail: "https://images.morele.net/i256/10120244_1_i256.jpg",
        soldUnits: 3,
        revenue: 3500,
        uniqueViews: 15
    }
]

const mockRankingGames: Array<offer> = [
    {
        name: "Far Cry 5",
        thumbnail: "https://images.morele.net/i256/977348_0_i256.jpg",
        soldUnits: 100,
        revenue: 2000,
        uniqueViews: 500
    },
    {
        name: "Star Wars Jedi Fallen Order",
        thumbnail: "https://images.morele.net/i256/6315756_0_i256.jpg",
        soldUnits: 80,
        revenue: 1500,
        uniqueViews: 450
    },
    {
        name: "Need for speed payback",
        thumbnail: "https://images.morele.net/i256/978932_0_i256.jpg",
        soldUnits: 60,
        revenue: 1000,
        uniqueViews: 350
    },
    {
        name: "Battlefield 2042",
        thumbnail: "https://images.morele.net/i256/5948812_0_i256.jpg",
        soldUnits: 40,
        revenue: 500,
        uniqueViews: 250
    },
    {
        name: "Tom Clancy' s The Division",
        thumbnail: "https://images.morele.net/i256/773470_0_i256.jpeg",
        soldUnits: 20,
        revenue: 250,
        uniqueViews: 150
    },
    {
        name: "Tom Clancy' s Rainbow Six Siege",
        thumbnail: "https://images.morele.net/i256/826499_0_i256.jpeg",
        soldUnits: 10,
        revenue: 100,
        uniqueViews: 50
    },
    {
        name: "Dying Light",
        thumbnail: "https://images.morele.net/i256/720980_0_i256.jpeg",
        soldUnits: 5,
        revenue: 50,
        uniqueViews: 25
    },
    {
        name: "Assassin' s Creed Odyssey",
        thumbnail: "https://images.morele.net/i256/4140983_0_i256.jpg",
        soldUnits: 2,
        revenue: 25,
        uniqueViews: 10
    },
];

const mockRankingGpu: Array<offer> = [
    {
        name: "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        thumbnail: "https://images.morele.net/i256/12788971_0_i256.jpg",
        soldUnits: 220,
        revenue: 250000,
        uniqueViews: 550
    },
    {
        name: "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        thumbnail: "https://images.morele.net/i256/12960745_0_i256.jpg",
        soldUnits: 90,
        revenue: 200000,
        uniqueViews: 500
    },
    {
        name: "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        thumbnail: "https://images.morele.net/i256/12788973_0_i256.jpg",
        soldUnits: 70,
        revenue: 120000,
        uniqueViews: 400
    },
    {
        name: "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        thumbnail: "https://images.morele.net/i256/5948081_0_i256.jpg",
        soldUnits: 50,
        revenue: 70000,
        uniqueViews: 300
    },
    {
        name: "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        thumbnail: "https://images.morele.net/i256/5946772_5_i256.jpg",
        soldUnits: 48,
        revenue: 40000,
        uniqueViews: 200
    },
    {
        name: "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        thumbnail: "https://images.morele.net/i256/11788491_5_i256.jpg",
        soldUnits: 45,
        revenue: 35200,
        uniqueViews: 75
    },
    {
        name: "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        thumbnail: "https://images.morele.net/i256/12788970_0_i256.jpg",
        soldUnits: 28,
        revenue: 75000,
        uniqueViews: 30
    },
    {
        name: "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        thumbnail: "https://images.morele.net/i256/5946240_0_i256.jpg",
        soldUnits: 15,
        revenue: 21000,
        uniqueViews: 15
    },
]

export const mockRankingForAllUsers: rankingForAllUsers = {
    'gameseller@spp.com': mockRankingGames,
    'cpuseller@spp.com': mockRankingCpu,
    'graficcardseller@spp.com': mockRankingGpu,
}
