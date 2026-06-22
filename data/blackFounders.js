/*
    founders Object:
    {
        id: num
        name: string
        pokemon: object[]
            {
                id: number
                nickname: string
                level: number
            }
    }
*/

const blackFounders = [
    {
        id: 0,
        name: "Adeola (Chizoba) Adeyemi",
        brand: [
            {
                id: 1,
                Name: "BEAUTY BY AD",
                Founded: 2017,
            },
        ]
    },
    {
        id: 1,
        name: "Danessa Myricks",
        brand: [
            {
                id: 2,
                Name: "DANESSA MYRICKS BEAUTY",
                Founded: 2005,
            },
        ]
    },
    {
        id: 2,
        name: "Pat McGrath",
        brand: [
            {
                id: 3,
                Name: "PAT MCGRATH LABS",
                Founded: 2015,
            },
        ]
    },
    {
        id: 3,
        name: "Stella Ndekile",
        brand: [
            {
                id: 4,
                Name: "NUBAN BEAUTY",
                Founded: 2017,
            },
        ]
    },
    {
        id: 4,
        name: "Chichi Eburu",
        brand: [
            {
                id: 5,
                Name: "JUVIA’S PLACE",
                Founded: 2016,
            },
        ]
    },
    {
        id: 5,
        name: "Kenya Dominique",
        brand: [
            {
                id: 6,
                Name: "GLAMQUEST BEAUTY",
                Founded: 2024,
            },
        ]
    },
    {
        id: 6,
        name: "Olamide Olowe",
        brand: [
            {
                id: 7,
                Name: "TOPICALS",
                Founded: 2018,
            },
        ]
    },
    {
        id: 7,
        name: "Marie Kouadio and Alice Lin Glover,",
        brand: [
            {
                id: 8,
                Name: "EADEM",
                Founded: 2018,
            },
        ]
    },
    {
        id: 8,
        name: "Jess Turner",
        brand: [
            {
                id: 9,
                Name: "OLAMINA BOTALINCALS",
                Founded: 2019,
            },
        ]
    },
    {
        id: 9,
        name: "Ronni Wilson",
        brand: [
            {
                id: 10,
                Name: "DEMOSEA",
                Founded: 0,
            },
        ]
    },
    {
        id: 10,
        name: "Thebetsile Magugu ",
        brand: [
            {
                id: 11,
                Name: "THEBE MAGUGU",
                Founded: 2016,
            },
        ]
    },
    {
        id: 11,
        name: "Florentina Agu",
        brand: [
            {
                id: 12,
                Name: "HERTUNBA",
                Founded: 2020,
            },
        ]
    },
    {
        id: 12,
        name: "Julius-Abuda Bonnitta",
        brand: [
            {
                id: 13,
                Name: "STUDIO BONITTA",
                Founded: 2022,
            },
        ]
    },
    {
        id: 13,
        name: "Anna Guy Christina",
        brand: [
            {
                id: 14,
                Name: "OR NOIR",
                Founded: 2025,
            },
        ]
    },
    {
        id: 14,
        name: "Anil Padia",
        brand: [
            {
                id: 15,
                Name: "YOSHITA 1967",
                Founded: 2020,
            },
        ]
    },
    {
        id: 15,
        name: "Christopher Afolabi, Tobi Adeleye, and the late Michael Atobalele",
        brand: [
            {
                id: 16,
                Name: "SEVERE NATURE",
                Founded: 2012,
            },
        ]
    },
    {
        id: 16,
        name: "Leslye Washington",
        brand: [
            {
                id: 17,
                Name: "MENT STUDIOS",
                Founded: 2022,
            },
        ]
    },
    {
        id: 17,
        name: "Danielle Udoh",
        brand: [
            {
                id: 18,
                Name: "NADI BY DANI",
                Founded: 2020,
            },
        ]
    },
    {
        id: 18,
        name: "Maximilian Davis",
        brand: [
            {
                id: 19, 
                Name: "MAXIMILIAN",
                Founded: 2020,
            },
        ]
    },
    {
        id: 19,
        name: "Eyiwaa Agyekumhene",
        brand: [
            {
                id: 20,
                Name: "KAYADUA",
                Founded: 2018,
            },
        ]
    },
    {
        id: 20,
        name: "Adebola Olaniyan",
        brand: [
            {
                id: 21,
                Name: "BOLAPSED",
                Founded: 2023,
            },
        ]
    },
    {
        id: 21,
        name: "Aurora James",
        brand: [
            {
                id: 22,
                Name: "BROTHER VELLIES",
                Founded: 2013,
            },
        ]
    },
    {
        id: 22,
        name: "Edna Konadu",
        brand: [
            {
                id: 23,
                Name: "AM:PM LONDON",
                Founded: 2020,
            },
        ]
    },
    {
        id: 23,
        name: "Aminah Abdul Jillil",
        brand: [
            {
                id: 24,
                Name: "AMINAH ABDUL JILLIL",
                Founded: 2012,
            },
        ]
    },
    {
        id: 24,
        name: "Trisha Ekhator",
        brand: [
            {
                id: 25,
                Name: "THE EKHATOR LABEL",
                Founded: 2021,
            },
        ]
    },
    {
        id: 25,
        name: "Maya Portorreal,",
        brand: [
            {
                id: 26,
                Name: "KITTEN CO",
                Founded: 2019,
            },
        ]
    },
    {
        id: 26,
        name: "Lisa-Marie Carter",
        brand: [
            {
                id: 27,
                Name: "NIKAO",
                Founded: 2015,
            },
        ]
    },
    {
        id: 27,
        name: "Undisclosed",
        brand: [
            {
                id: 28,
                Name: "LIVIN LAVISH",
                Founded: 2020,
            },
        ]
    },
    {
        id: 28,
        name: "Johnny Nelson",
        brand: [
            {
                id: 29,
                Name: "JOHNNY NELSON",
                Founded: 2017,
            },
        ]
    },
    {
        id: 29,
        name: "Neumi Anekhe",
        brand: [
            {
                id: 30,
                Name: "OMA THE LABEL",
                Founded: 2018,
            },
        ]
    },
    {
        id: 30,
        name: "Wilglory Tanjong",
        brand: [
            {
                id: 31,
                Name: "ANIMA IRIS",
                Founded: 2020,
            },
        ]
    },
    {
        id: 31,
        name: "Peter LaBorde",
        brand: [
            {
                id: 32,
                Name: "PETER LABORDE",
                Founded: 2025,
            },
        ]
    },
    {
        id: 32,
        name: "Telfar Clemens",
        brand: [
            {
                id: 33,
                Name: "TELFAR",
                Founded: 2005,
            },
        ]
    },
    {
        id: 33,
        name: "Tiffanie Alice",
        brand: [
            {
                id: 34,
                Name: "PARALLEL STUDIO",
                Founded: 2021,
            },
        ]
    },
    {
        id: 34,
        name: "Ashley Ciriaco",
        brand: [
            {
                id: 35,
                Name: "CIRIACO",
                Founded: 2020,
            },
        ]
    },
    {
        id: 35,
        name: "Maximilian Davis",
        brand: [
            {
                id: 36,
                Name: "MAXIMILLIAN",
                Founded: 2020,
            },
        ]
    },
    {
        id: 36,
        name: "Melian Junius",
        brand: [
            {
                id: 37,
                Name: "MELIAN J",
                Founded: 2015,
            },
        ]
    },
    {
        id: 37,
        name: "Yasmina Ossai",
        brand: [
            {
                id: 38,
                Name: "MINA NOVSKI",
                Founded: 2019,
            },
        ]
    },
    {
        id: 38,
        name: "Christina S. Virgil",
        brand: [
            {
                id: 39,
                Name: "CSV NEW YORK",
                Founded: 2019,
            },
        ]
    },
    {
        id: 39,
        name: "Kehinde Martins",
        brand: [
            {
                id: 40,
                Name: "TOFE",
                Founded: 2020,
            },
        ]
    },
    {
        id: 40,
        name: "Monti Landers",
        brand: [
            {
                id: 41,
                Name: "RIOT SWIM",
                Founded: 2016,
            },
        ]
    }
]

export default blackFounders