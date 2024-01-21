export type sale = {
    date: Date;
    name: string;
    price: number;
}

export type salesForAllUsers = {
    [key: string]: Array<sale>;
}

const mockSales: Array<sale> = [
    {
        "date": new Date("2024-01-21 13:14:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-21 03:28:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-20 17:48:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-20 07:47:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-19 21:49:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-19 11:44:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-19 01:32:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-18 15:17:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-18 05:32:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-17 19:14:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-17 09:52:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-16 23:14:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-16 13:34:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-16 03:28:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-15 17:02:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-15 07:15:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-14 21:21:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-14 11:16:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-14 01:57:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-13 15:52:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-13 05:05:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-12 19:57:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-12 09:55:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-11 23:19:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-11 13:52:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-11 03:29:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-10 17:24:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-10 07:26:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-09 21:29:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-09 11:18:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-09 01:00:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-08 15:28:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-08 05:19:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-07 19:44:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-07 09:36:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-06 23:48:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-06 13:29:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-06 03:24:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-05 17:35:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-05 07:15:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-04 21:24:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-04 11:29:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-04 01:25:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-03 15:29:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-03 05:00:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-02 19:48:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-02 09:33:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-01 23:27:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-01 13:33:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-01 03:37:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-31 17:34:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-31 07:55:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-30 21:46:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-30 11:26:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-30 01:15:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-29 15:42:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-29 05:38:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-28 19:49:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-28 09:27:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-27 23:13:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-27 13:32:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-27 03:46:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-26 17:58:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-26 07:28:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-25 21:57:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-25 11:44:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-25 01:31:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-24 15:00:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-24 05:14:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-23 19:36:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-23 09:36:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-22 23:55:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-22 13:31:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-22 03:01:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-21 17:23:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-21 07:54:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-20 21:48:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-20 11:08:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-20 01:11:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-19 15:04:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-19 05:40:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-18 19:27:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-18 09:07:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-17 23:44:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-17 13:34:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-17 03:45:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-16 17:04:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-16 07:48:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-15 21:22:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-15 11:47:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-15 01:15:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-14 15:08:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-14 05:24:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-13 19:41:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-13 09:13:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-12 23:17:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-12 13:50:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-12 03:22:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-11 17:39:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2023-12-11 07:09:50.195101"),
        "name": "Far Cry 5",
        "price": 20.0
    },
    {
        "date": new Date("2024-01-21 13:52:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-21 03:13:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-20 16:59:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-20 07:26:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-19 21:48:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-19 11:54:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-19 01:11:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-18 15:09:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-18 05:47:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-17 19:51:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-17 09:39:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-16 23:00:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-16 13:01:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-16 03:32:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-15 17:16:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-15 07:40:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-14 21:32:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-14 11:33:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-14 01:30:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-13 15:38:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-13 05:55:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-12 19:47:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-12 09:18:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-11 23:04:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-11 13:21:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-11 03:26:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-10 17:13:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-10 07:34:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-09 21:36:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-09 11:03:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-09 01:25:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-08 15:47:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-08 05:47:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-07 19:34:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-07 09:17:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-06 23:51:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-06 13:35:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-06 03:47:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-05 17:53:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-05 07:24:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-04 21:12:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-04 11:45:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-04 01:39:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-03 15:31:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-03 05:03:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-02 19:14:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-02 09:02:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-01 23:01:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-01 13:09:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-01 02:59:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-31 17:22:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-31 07:49:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-30 21:24:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-30 11:22:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-30 01:20:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-29 15:45:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-29 05:38:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-28 19:40:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-28 09:20:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-27 23:20:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-27 13:23:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-27 03:44:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-26 17:15:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-26 07:42:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-25 21:23:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-25 11:16:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-25 01:18:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-24 15:45:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-24 05:24:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-23 19:42:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-23 09:02:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-22 23:25:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-22 13:16:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-22 03:24:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-21 17:56:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-21 07:41:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-20 21:55:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-20 11:40:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-20 01:23:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2023-12-19 15:41:50.195101"),
        "name": "Star Wars Jedi Fallen Order",
        "price": 18.75
    },
    {
        "date": new Date("2024-01-21 13:34:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-21 03:44:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-20 17:11:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-20 07:43:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-19 21:08:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-19 11:41:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-19 01:12:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-18 15:54:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-18 05:41:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-17 19:27:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-17 09:22:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-16 23:51:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-16 13:42:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-16 03:41:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-15 16:59:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-15 07:18:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-14 21:37:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-14 11:28:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-14 01:49:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-13 15:22:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-13 05:06:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-12 19:30:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-12 09:32:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-11 23:55:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-11 13:36:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-11 03:36:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-10 17:31:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-10 07:50:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-09 21:27:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-09 11:04:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-09 01:35:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-08 15:35:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-08 05:13:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-07 19:40:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-07 09:07:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-06 23:25:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-06 13:34:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-06 03:37:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-05 17:03:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-05 07:14:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-04 21:18:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-04 11:31:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-04 01:00:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-03 15:07:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-03 05:43:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-02 19:52:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-02 09:44:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-01 23:31:50.195101"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-01 13:05:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-01 03:11:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-31 17:11:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-31 07:56:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-30 21:10:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-30 11:35:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-30 01:53:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-29 15:03:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-29 05:52:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-28 19:53:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-28 09:01:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2023-12-27 23:29:50.196105"),
        "name": "Need for speed payback",
        "price": 16.666666666666668
    },
    {
        "date": new Date("2024-01-21 13:56:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-21 03:27:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-20 17:27:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-20 07:06:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-19 21:35:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-19 11:11:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-19 01:29:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-18 15:53:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-18 05:54:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-17 19:50:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-17 09:01:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-16 23:28:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-16 13:37:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-16 03:00:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-15 17:44:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-15 07:36:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-14 21:47:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-14 11:11:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-14 01:56:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-13 15:14:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-13 05:43:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-12 19:22:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-12 09:45:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-11 23:30:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-11 13:25:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-11 03:20:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-10 17:18:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-10 07:18:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-09 21:41:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-09 11:54:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-09 01:00:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-08 15:27:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-08 05:04:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-07 19:05:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-07 09:37:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-06 23:56:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-06 13:08:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-06 03:26:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-05 17:23:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-05 07:04:50.196105"),
        "name": "Battlefield 2042",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-21 13:09:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-21 03:12:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-20 17:46:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-20 07:39:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-19 21:46:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-19 11:07:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-19 00:59:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-18 15:08:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-18 05:37:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-17 19:39:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-17 09:48:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-16 23:42:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-16 13:20:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-16 03:43:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-15 17:30:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-15 07:11:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-14 21:35:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-14 11:25:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-14 01:06:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-13 15:33:50.196105"),
        "name": "Tom Clancy' s The Division",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-21 13:58:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-21 03:39:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-20 17:57:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-20 07:55:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-19 21:10:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-19 11:47:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-19 01:35:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-18 15:01:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-18 05:07:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-17 19:03:50.196105"),
        "name": "Tom Clancy' s Rainbow Six Siege",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-21 13:44:50.196105"),
        "name": "Dying Light",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-21 03:13:50.196105"),
        "name": "Dying Light",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-20 17:54:50.196105"),
        "name": "Dying Light",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-20 07:37:50.196105"),
        "name": "Dying Light",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-19 21:45:50.196105"),
        "name": "Dying Light",
        "price": 10.0
    },
    {
        "date": new Date("2024-01-21 13:25:50.196105"),
        "name": "Assassin' s Creed Odyssey",
        "price": 12.5
    },
    {
        "date": new Date("2024-01-21 03:27:50.196105"),
        "name": "Assassin' s Creed Odyssey",
        "price": 12.5
    }]

const mockSalesCpu: Array<sale> = [
    {
        "date": new Date("2024-01-23 19:16:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-23 16:35:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 23:19:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 22:39:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-23 07:26:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-23 04:21:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 19:16:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 18:15:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 19:41:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-23 10:41:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 23:30:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 01:58:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 19:20:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-18 09:58:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 17:27:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 10:13:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-20 11:31:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-20 23:25:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-23 02:01:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-18 06:06:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 15:09:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 04:21:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-18 07:38:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-20 22:16:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 20:02:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 18:16:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-16 05:36:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 13:18:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-16 19:21:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-12 22:44:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 07:12:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 05:39:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-13 04:01:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-18 07:53:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-09 15:21:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-17 23:43:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 07:51:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-16 02:36:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-15 21:36:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-22 04:33:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-08 19:27:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-18 16:03:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-11 13:37:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-05 21:18:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-20 03:12:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-06 23:01:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 23:28:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-06 04:19:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-11 19:58:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 17:34:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-02 23:04:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-17 10:15:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 11:06:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-08 08:29:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-01 07:17:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 05:22:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 03:33:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 10:05:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-21 09:48:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-04 03:09:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-11 07:57:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-16 04:26:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-05 17:04:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-10 16:20:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-07 19:55:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-27 17:48:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-10 01:31:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-12 15:07:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-26 11:53:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-06 13:20:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-20 21:40:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-31 03:18:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-05 19:49:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-14 16:25:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-30 03:04:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-29 19:18:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-20 15:36:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-22 17:13:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-07 13:43:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-04 01:42:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-31 11:28:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-13 16:39:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-16 23:54:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-13 10:28:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-06 07:58:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-26 11:32:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-29 17:08:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-02 01:47:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-29 03:29:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-09 00:02:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-12 13:31:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-01 01:30:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-16 11:04:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 22:52:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 21:24:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-07 23:40:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-22 19:06:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-11 17:01:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-22 03:08:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-19 16:36:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-21 12:02:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-12 17:16:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-06 19:30:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-24 18:06:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-10 19:42:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-15 01:05:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-23 21:49:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-10 05:31:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-23 07:06:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-13 22:28:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-27 07:21:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-22 10:49:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-14 11:05:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-14 09:42:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-16 19:06:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-06 21:21:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-09 07:26:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-30 10:57:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-15 11:44:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2023-12-25 01:59:59.575805"),
        "name": "Procesor Intel Core i5-12400F, 2.5 GHz, 18 MB, BOX (BX8071512400F)",
        "price": 2083.3333333333335
    },
    {
        "date": new Date("2024-01-23 20:02:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 15:19:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-22 23:25:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 13:07:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 15:25:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-22 08:43:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 13:19:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 05:57:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-22 19:52:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-20 19:52:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 09:55:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-20 03:51:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 07:27:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 11:11:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 03:43:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-18 19:12:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 19:05:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 13:33:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 19:34:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-21 10:45:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-20 11:57:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-15 22:34:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-22 21:56:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 23:24:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-21 19:04:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 13:10:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-18 09:56:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-13 16:50:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 23:09:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-15 08:52:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-16 07:17:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-14 18:13:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-14 11:11:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-21 01:27:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-20 23:28:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-13 14:09:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-14 19:26:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 04:20:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-07 23:08:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-22 04:22:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-10 11:56:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-10 03:17:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-18 13:37:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-20 05:51:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-18 07:36:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-18 04:32:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-14 05:38:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 22:17:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-03 19:52:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-15 15:52:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 15:58:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-21 16:34:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-19 11:44:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-14 23:12:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-08 01:56:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-31 21:49:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-07 11:56:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-14 07:37:59.575805"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-11 18:00:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-06 14:21:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-13 19:56:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-29 09:46:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-13 11:13:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-31 04:34:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-15 19:23:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-10 06:35:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-10 01:22:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-12 15:58:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-20 23:50:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-12 07:45:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-03 09:03:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-28 04:46:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-05 19:45:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-11 15:14:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 15:05:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-01 22:04:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-07 23:29:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-07 18:52:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-04 07:25:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-13 22:55:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-31 11:31:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-17 01:05:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-16 23:56:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-09 23:32:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-02 19:24:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-19 09:20:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2023-12-19 00:00:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-05 16:37:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-16 11:47:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-08 23:21:59.576798"),
        "name": "Procesor AMD Ryzen 7 7800X3D, 4.2 GHz, 96 MB, BOX (100-100000910WOF) ",
        "price": 2000.0
    },
    {
        "date": new Date("2024-01-23 19:09:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 13:38:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 23:53:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 01:15:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 03:54:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 23:43:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 13:41:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-21 18:59:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 11:24:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 07:23:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 09:45:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 05:32:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 19:21:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 04:08:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 05:21:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 10:41:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 19:44:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 13:41:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 19:04:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 15:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 15:11:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 02:00:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 08:01:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-14 05:28:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 19:39:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 18:03:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 13:04:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 16:38:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 07:22:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 08:03:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-13 19:50:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-16 01:44:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 11:47:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 16:49:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 13:46:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 08:04:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-08 19:25:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-13 00:45:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 11:51:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 22:59:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 11:46:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-10 03:53:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-06 07:58:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 06:54:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-07 07:58:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-08 19:59:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-08 11:23:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-04 05:29:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-09 19:23:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 13:13:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-07 03:06:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 01:34:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 11:23:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-08 08:11:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-03 13:27:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-03 04:58:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-14 11:44:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 01:13:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 17:17:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 21:04:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-01 07:33:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-06 00:24:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-21 05:24:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 23:00:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-07 19:17:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2023-12-30 10:23:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-21 01:14:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-09 20:46:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-09 15:51:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2023-12-31 19:03:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600X, 3.7 GHz, 32 MB, BOX (100-100000065BOX) ",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 19:05:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 10:12:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 13:46:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 10:39:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 03:31:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 03:31:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 13:56:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 18:27:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 03:37:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 10:50:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 07:50:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 08:26:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 19:36:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 22:16:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 07:06:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 07:05:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-17 19:28:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 06:04:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 13:34:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-17 11:29:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 00:02:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 22:11:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 23:05:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 00:31:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-13 19:13:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 17:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 15:43:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 10:43:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 11:46:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 04:29:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-12 13:05:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-10 21:54:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-10 11:22:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-16 22:45:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-13 21:27:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 01:11:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-14 19:09:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-13 00:33:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-09 13:25:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-17 07:56:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 03:11:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 09:38:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 01:50:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 00:46:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 23:40:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 22:42:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-10 09:13:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-08 03:59:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 19:33:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-05 10:25:59.576798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, BOX (100-100000927BOX) ",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 19:12:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 12:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 11:48:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-22 22:54:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 03:09:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 04:03:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 13:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-21 04:52:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 11:13:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 02:00:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-22 23:44:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-19 05:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-22 19:10:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-20 00:27:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-19 17:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-21 22:33:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-22 11:26:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-22 09:45:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-21 13:55:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-19 20:55:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-18 19:55:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-16 19:56:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-17 09:37:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-17 02:52:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-16 19:58:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-22 18:56:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-14 01:48:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-12 13:44:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-12 03:37:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-19 00:00:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1333.3333333333333
    },
    {
        "date": new Date("2024-01-23 19:06:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-23 18:19:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-23 13:11:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-23 01:41:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-22 08:00:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-22 04:01:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-22 01:20:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-22 08:58:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-21 11:59:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-21 13:53:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-22 03:18:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-21 23:55:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-23 07:25:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-18 22:05:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-22 01:51:59.576798"),
        "name": "Procesor AMD Ryzen 5 7600X, 4.7 GHz, 32 MB, BOX (100-100000593WOF) ",
        "price": 1000.0
    },
    {
        "date": new Date("2024-01-23 19:43:59.576798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-23 14:40:59.576798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-23 05:05:59.576798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-22 22:46:59.577798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-22 16:00:59.577798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-23 04:05:59.577798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-22 07:06:59.577798"),
        "name": "Procesor AMD Ryzen 7 5800X, 3.8 GHz, 32 MB, BOX (100-100000063WOF) ",
        "price": 1071.4285714285713
    },
    {
        "date": new Date("2024-01-23 19:34:59.577798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, OEM (100-000000927)",
        "price": 1166.6666666666667
    },
    {
        "date": new Date("2024-01-23 10:01:59.577798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, OEM (100-000000927)",
        "price": 1166.6666666666667
    },
    {
        "date": new Date("2024-01-23 11:46:59.577798"),
        "name": "Procesor AMD Ryzen 5 5600, 3.5 GHz, 32 MB, OEM (100-000000927)",
        "price": 1166.6666666666667
    },
]

const mockSalesGpu: Array<sale> = [
    {
        "date": new Date("2024-01-23 19:50:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 12:29:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 09:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 01:30:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 08:04:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 08:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 07:25:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 05:25:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-20 19:50:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 10:35:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 03:16:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 10:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 07:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-21 15:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 05:44:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 20:11:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 11:35:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 03:49:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-21 13:17:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 21:50:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-17 23:26:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-21 04:59:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-20 03:42:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-19 00:15:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-16 20:10:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-17 13:44:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-14 01:42:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 16:30:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 07:38:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-21 09:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 19:34:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-16 02:01:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 19:40:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 14:13:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-19 13:43:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-16 12:43:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 07:59:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-19 04:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-19 01:20:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-22 04:47:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 19:25:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 14:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-11 13:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-14 20:44:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 07:19:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-12 14:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 01:15:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-06 04:21:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 19:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 15:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-09 05:25:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-06 19:35:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-04 07:19:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-08 08:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-14 19:27:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 11:16:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-09 19:41:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-04 19:33:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 01:57:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 21:19:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 20:13:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-21 06:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-03 03:34:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 23:00:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-07 19:52:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-27 18:01:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-01 19:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-01 11:44:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 08:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-03 16:15:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-28 13:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-25 05:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 19:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 13:03:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 05:56:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 01:59:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-01 16:08:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-04 13:25:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-17 07:33:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 23:02:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-10 11:21:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-24 10:53:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 13:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-20 05:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-26 19:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-26 11:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-26 03:26:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 01:41:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-01 19:40:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-12 16:49:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-21 01:15:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-24 12:07:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-08 11:50:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-16 02:10:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-31 07:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-31 01:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-22 19:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-19 18:49:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-30 08:12:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-11 10:14:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-13 04:07:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-16 22:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 13:29:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-06 15:48:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-24 12:04:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-11 01:46:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-10 16:10:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-23 15:02:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-18 19:59:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-13 22:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-14 16:06:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 07:50:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-12 19:53:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-26 13:28:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-31 01:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-11 16:21:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-11 07:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-04 07:24:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-09 01:19:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-05 05:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-08 19:50:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-19 12:45:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-04 00:08:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-24 01:17:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-03 03:22:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-28 18:56:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 13:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-13 05:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-06 19:24:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 08:12:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-18 09:53:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-07 10:46:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-29 20:06:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-27 02:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-01 11:39:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-06 22:29:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-09 11:14:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-20 13:39:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-26 01:20:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-08 11:29:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-12 03:46:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-12 01:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-13 10:01:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-11 21:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-30 19:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 16:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-24 09:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-18 01:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-17 19:35:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-05 04:07:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 01:42:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-17 01:39:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-29 12:02:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-17 10:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-04 13:40:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-20 06:11:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-10 19:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-17 06:33:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-10 15:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-21 16:44:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-08 03:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-07 21:10:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-14 07:35:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-17 00:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-06 23:14:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-10 02:02:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-29 11:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-02 23:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-19 19:22:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-19 14:36:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-21 02:11:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-16 16:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-27 11:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-12 17:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-04 01:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-09 05:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-26 04:13:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-18 10:49:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-01 13:51:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-10 05:27:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-09 19:16:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-24 11:28:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-24 03:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-08 13:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-01 03:40:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-23 03:54:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-16 01:36:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-06 21:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-08 03:14:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-08 01:44:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-31 01:16:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-30 22:33:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-04 20:04:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-28 13:03:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-06 07:52:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-19 19:19:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-22 03:14:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-19 03:30:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-10 14:06:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-21 16:06:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-29 19:28:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-12 23:11:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-29 13:46:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-12 12:38:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-29 08:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-25 01:02:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-15 05:20:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-07 05:03:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-28 19:17:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-10-28 17:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-06 07:49:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-06 05:34:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-22 23:15:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-10 10:34:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-22 09:42:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-19 00:05:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-12-27 19:14:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-12 11:37:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2023-11-12 03:20:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-05 14:04:44.665260"),
        "name": "Gigabyte GeForce RTX 4070 WindForce OC 12GB GDDR6X",
        "price": 1136.3636363636363
    },
    {
        "date": new Date("2024-01-23 19:48:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-23 16:24:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-23 05:23:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-22 22:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-22 23:46:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-23 05:00:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 19:55:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-22 08:22:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 19:29:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 22:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-22 13:54:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 12:47:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-19 20:13:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 16:00:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-20 07:22:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-20 16:47:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-22 11:40:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-22 09:32:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-19 07:18:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-16 16:39:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-15 11:57:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-19 11:13:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-18 07:21:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-14 05:39:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-13 19:28:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-14 10:40:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-18 09:58:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-15 23:00:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-14 11:56:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 09:53:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 08:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-18 16:07:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-19 19:34:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-12 20:07:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-16 17:38:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-15 01:24:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-17 20:13:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-11 12:09:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-20 15:36:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 04:43:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-13 19:48:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-13 13:54:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-11 13:27:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 11:45:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-14 16:05:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-06 22:43:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-12 07:49:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-19 21:21:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 19:28:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-11 13:31:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-17 13:21:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 17:11:44.665260"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-04 08:07:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-03 22:39:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-08 01:27:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-14 15:16:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 19:34:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 14:01:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-16 14:13:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-06 15:07:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-08 19:16:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-11 02:14:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-16 01:56:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-15 22:49:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-07 19:53:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-21 02:35:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-30 01:59:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 20:54:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-01 04:12:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-03 16:24:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-28 14:10:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-06 01:19:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-24 19:56:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-05 13:49:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-02 05:52:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-05 01:41:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-29 11:52:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-22 17:22:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-01 02:04:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-04 01:39:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-07 03:51:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-17 01:25:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-16 23:36:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-13 10:49:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-13 07:16:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-19 09:36:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 11:59:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-09 07:32:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-01 19:54:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2023-12-25 03:44:44.666271"),
        "name": "Gigabyte GeForce RTX 4060 Eagle OC 8GB GDDR6",
        "price": 2222.222222222222
    },
    {
        "date": new Date("2024-01-23 19:56:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 17:26:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 18:01:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 16:32:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 15:57:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 13:41:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 13:34:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 15:24:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 11:45:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-21 04:37:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 13:45:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 05:17:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 07:22:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 07:05:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 01:22:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 19:59:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 12:11:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 06:53:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-16 08:12:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 22:04:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 23:33:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 07:44:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-21 01:31:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 00:22:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 19:26:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-13 10:13:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 07:16:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-12 13:42:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-13 08:04:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-14 03:55:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-16 07:30:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-13 11:40:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 11:54:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 16:43:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 07:20:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 21:47:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 20:13:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 15:54:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 21:43:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-22 05:12:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-10 11:16:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 06:52:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-16 19:25:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-09 11:49:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-16 11:28:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-05 01:32:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-18 01:36:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 22:03:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-05 19:51:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-05 10:22:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-05 02:09:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 10:48:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-10 19:38:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-19 09:38:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-17 02:04:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-10 02:10:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-21 11:21:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-14 07:30:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 18:09:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2023-12-30 05:26:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-03 19:30:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-11 02:15:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-08 07:44:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2023-12-28 14:13:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-02 11:55:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2023-12-27 17:27:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 14:01:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-01 12:10:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-20 23:16:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-15 04:28:44.666271"),
        "name": "Palit GeForce RTX 4070 Dual 12GB GDDR6X",
        "price": 1714.2857142857142
    },
    {
        "date": new Date("2024-01-23 19:30:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 13:43:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 18:01:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 10:40:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 00:13:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 14:49:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 07:31:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 04:24:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 04:03:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 07:58:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 17:19:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 01:51:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 07:44:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 17:52:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 03:51:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-17 13:23:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 11:27:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 04:10:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 01:24:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 21:13:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 11:15:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 01:38:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 21:48:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 22:23:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-14 19:46:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 11:34:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 03:26:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 04:15:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-13 08:07:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 04:53:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-11 08:01:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-13 11:19:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 19:57:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-12 19:38:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-12 12:13:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 08:57:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-10 07:50:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-08 10:12:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 15:23:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 16:59:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-10 12:00:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 16:15:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-15 01:30:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 00:42:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-14 15:17:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-06 23:07:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-08 11:41:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 21:25:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 19:30:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-05 11:00:44.666271"),
        "name": "MSI Radeon RX 6750 XT Mech 2X 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 19:37:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-23 10:49:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-23 12:07:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-23 13:24:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-22 08:05:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 17:44:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-22 19:25:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 21:35:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-23 03:38:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-22 16:21:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 07:36:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 14:22:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 19:32:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-23 06:30:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-18 00:01:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 16:41:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 20:13:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-18 21:03:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-22 07:41:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 11:03:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-18 19:22:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-17 16:35:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-17 09:18:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-16 03:29:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 19:19:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-15 11:20:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 15:47:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-15 23:02:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-16 19:17:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-12 22:15:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-17 14:04:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-13 12:13:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-19 19:59:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-21 02:07:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-11 01:18:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-16 12:24:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 19:43:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-08 09:56:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 16:03:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 14:12:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-17 03:52:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-20 10:12:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-13 07:15:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-18 10:15:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-12 20:02:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-18 04:26:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-12 07:49:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-08 03:27:44.666271"),
        "name": "Gigabyte GeForce RTX 3060 Gaming OC 12GB",
        "price": 833.3333333333334
    },
    {
        "date": new Date("2024-01-23 19:54:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 10:17:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 05:50:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 19:46:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 08:08:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 09:27:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-21 19:18:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-21 04:27:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-20 19:19:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-21 22:54:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-20 11:33:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 09:11:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-20 19:24:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-20 00:17:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 01:46:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-18 04:54:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-19 03:33:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-17 10:27:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 07:29:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 00:43:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 00:08:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 22:31:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-21 01:56:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 21:12:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-19 20:03:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-17 13:31:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-15 03:46:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-18 04:56:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-13 07:25:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-16 13:40:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-16 07:47:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-18 15:51:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-22 11:49:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-10 01:49:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-19 13:21:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-16 12:43:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-14 19:50:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-19 04:50:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-12 17:41:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-20 14:01:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-15 11:31:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-16 23:34:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-08 01:38:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-20 05:47:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-12 19:56:44.666271"),
        "name": "Sapphire Radeon RX 6700 XT Pulse Gaming 12GB",
        "price": 782.2222222222222
    },
    {
        "date": new Date("2024-01-23 19:14:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-23 11:27:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-23 09:20:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-23 07:31:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 19:25:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 08:26:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 01:38:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 08:56:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-20 11:54:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-20 10:37:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-19 15:29:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-21 23:54:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-19 19:30:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-18 10:10:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 02:08:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-17 13:59:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-19 19:38:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-20 23:15:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-21 13:57:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-18 06:18:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-17 03:33:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-17 16:44:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-18 07:46:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-21 21:33:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-21 19:28:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-19 16:11:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 17:29:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-22 17:12:44.666271"),
        "name": "Gigabyte GeForce RTX 4070 Gaming OC 12GB",
        "price": 2678.5714285714284
    },
    {
        "date": new Date("2024-01-23 19:24:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 13:26:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-23 13:35:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 16:55:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 11:45:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 18:44:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 07:16:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 22:24:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-22 11:16:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 02:08:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 01:38:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-21 23:33:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-19 07:43:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-18 22:15:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },
    {
        "date": new Date("2024-01-20 08:12:44.666271"),
        "name": "MSI GeForce RTX 3060 Ventus 2X OC 12GB GDDR6",
        "price": 1400.0
    },

]
export const mockSalesForAllUsers: salesForAllUsers = {
    'gameseller@spp.com': mockSales,
    'cpuseller@spp.com': mockSalesCpu,
    'graficcardseller@spp.com': mockSalesGpu
}
