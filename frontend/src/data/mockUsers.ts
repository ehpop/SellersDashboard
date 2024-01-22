export type userType = {
    username: string
    password: string
    linkedAccounts: string[]
    photo: string
}

export const users: Array<userType> = [
    {
        username: 'gameseller@spp.com',
        password: '123456',
        linkedAccounts: [
            'gameseller@spp.com',
            'cpuseller@spp.com',
            'graficcardseller@spp.com',
        ],
        photo: 'https://s22908.pcdn.co/wp-content/uploads/2023/07/most-hyped-up-games.jpg',
    },
    {
        username: 'cpuseller@spp.com',
        password: '123456',
        linkedAccounts: [
            'gameseller@spp.com',
            'cpuseller@spp.com',
            'graficcardseller@spp.com',
        ],
        photo: 'https://images.ctfassets.net/xwxknivhjv1b/5CrY7L3asNKtTfZTEq4155/20e221344f16a54b5b4e8787b39c349f/CPU-Hero-Image1.svg',
    },
    {
        username: 'graficcardseller@spp.com',
        password: '123456',
        linkedAccounts: [
            'gameseller@spp.com',
            'cpuseller@spp.com',
            'graficcardseller@spp.com',
        ],
        photo: 'https://image.ceneostatic.pl/data/article_picture/e7/3b/f2ab-a7c3-4832-b963-fe82fb856832_medium.jpg'
    },
]
