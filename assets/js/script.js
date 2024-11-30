game_components = {
    hold_cards: [
        [],[],[],[]
    ],
    central_money: {
        black: 7,
        white: 7,
        red: 7,
        blue: 7,
        green: 7,
        gold: 5,
    },
    players: [
        {
            player_index: 0,
            balance: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            owned_mine: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            score: 0,
        },
        {
            player_index: 1,
            balance: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            owned_mine: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            score: 0,
        },
        {
            player_index: 2,
            balance: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            owned_mine: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            score: 0,
        },
        {
            player_index: 3,
            balance: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            owned_mine: { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            score: 0,
        },
    ],
    cards: [
        [
            {
                color: "Black",
                points: 0,
                cost: { black: 0, white: 1, red: 1, blue: 1, green: 1 },
                state: 0,
                card_index: 0,
                tier: 1,
            },
            {
                color: "Black",
                points: 0,
                cost: { black: 0, white: 0, red: 1, blue: 0, green: 2 },
                state: 0,
                card_index: 1,
                tier: 1,
            },
            {
                color: "Black",
                points: 0,
                cost: { black: 0, white: 2, red: 0, blue: 0, green: 2 },
                state: 0,
                card_index: 2,
                tier: 1,
            },
            {
                color: "Black",
                points: 0,
                cost: { black: 1, white: 0, red: 3, blue: 0, green: 1 },
                state: 0,
                card_index: 3,
                tier: 1,
            },
            {
                color: "Black",
                points: 0,
                cost: { black: 0, white: 0, red: 0, blue: 0, green: 3 },
                state: 0,
                card_index: 4,
                tier: 1,
            },
            {
                color: "Black",
                points: 0,
                cost: { black: 0, white: 1, red: 1, blue: 2, green: 1 },
                state: 0,
                card_index: 5,
                tier: 1,
            },
            {
                color: "Black",
                points: 0,
                cost: { black: 0, white: 2, red: 1, blue: 2, green: 0 },
                state: 0,
                card_index: 6,
                tier: 1,
            },
            {
                color: "Black",
                points: 1,
                cost: { black: 0, white: 0, red: 0, blue: 4, green: 0 },
                state: 0,
                card_index: 7,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 2, white: 1, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 8,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 1, white: 1, red: 2, blue: 0, green: 1 },
                state: 0,
                card_index: 9,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 1, white: 1, red: 1, blue: 0, green: 1 },
                state: 0,
                card_index: 10,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 0, white: 0, red: 1, blue: 1, green: 3 },
                state: 0,
                card_index: 11,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 3, white: 0, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 12,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 0, white: 1, red: 2, blue: 0, green: 2 },
                state: 0,
                card_index: 13,
                tier: 1,
            },
            {
                color: "Blue",
                points: 0,
                cost: { black: 2, white: 0, red: 0, blue: 0, green: 2 },
                state: 0,
                card_index: 14,
                tier: 1,
            },
            {
                color: "Blue",
                points: 1,
                cost: { black: 0, white: 0, red: 4, blue: 0, green: 0 },
                state: 0,
                card_index: 15,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 0, white: 2, red: 0, blue: 1, green: 0 },
                state: 0,
                card_index: 16,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 0, white: 0, red: 2, blue: 2, green: 0 },
                state: 0,
                card_index: 17,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 0, white: 1, red: 0, blue: 3, green: 1 },
                state: 0,
                card_index: 18,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 1, white: 1, red: 1, blue: 1, green: 0 },
                state: 0,
                card_index: 19,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 2, white: 1, red: 1, blue: 1, green: 0 },
                state: 0,
                card_index: 20,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 2, white: 0, red: 2, blue: 1, green: 0 },
                state: 0,
                card_index: 21,
                tier: 1,
            },
            {
                color: "Green",
                points: 0,
                cost: { black: 0, white: 0, red: 3, blue: 0, green: 0 },
                state: 0,
                card_index: 22,
                tier: 1,
            },
            {
                color: "Green",
                points: 1,
                cost: { black: 4, white: 0, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 23,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 0, white: 3, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 24,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 3, white: 1, red: 1, blue: 0, green: 0 },
                state: 0,
                card_index: 25,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 0, white: 0, red: 0, blue: 2, green: 1 },
                state: 0,
                card_index: 26,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 2, white: 2, red: 0, blue: 0, green: 1 },
                state: 0,
                card_index: 27,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 1, white: 2, red: 0, blue: 1, green: 1 },
                state: 0,
                card_index: 28,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 1, white: 1, red: 0, blue: 1, green: 1 },
                state: 0,
                card_index: 29,
                tier: 1,
            },
            {
                color: "Red",
                points: 0,
                cost: { black: 0, white: 2, red: 2, blue: 0, green: 0 },
                state: 0,
                card_index: 30,
                tier: 1,
            },
            {
                color: "Red",
                points: 1,
                cost: { black: 0, white: 4, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 31,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 1, white: 0, red: 0, blue: 2, green: 2 },
                state: 0,
                card_index: 32,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 1, white: 0, red: 2, blue: 0, green: 0 },
                state: 0,
                card_index: 33,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 1, white: 0, red: 1, blue: 1, green: 1 },
                state: 0,
                card_index: 34,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 0, white: 0, red: 0, blue: 3, green: 0 },
                state: 0,
                card_index: 35,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 0, white: 0, red: 0, blue: 2, green: 2 },
                state: 0,
                card_index: 36,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 1, white: 0, red: 1, blue: 1, green: 2 },
                state: 0,
                card_index: 37,
                tier: 1,
            },
            {
                color: "White",
                points: 0,
                cost: { black: 1, white: 3, red: 0, blue: 1, green: 0 },
                state: 0,
                card_index: 38,
                tier: 1,
            },
            {
                color: "White",
                points: 1,
                cost: { black: 0, white: 0, red: 0, blue: 0, green: 4 },
                state: 0,
                card_index: 39,
                tier: 1,
            },
        ],
        [
            {
                color: "Black",
                points: 1,
                cost: { black: 0, white: 3, red: 0, blue: 2, green: 2 },
                state: 0,
                card_index: 0,
                tier: 2,
            },
            {
                color: "Black",
                points: 1,
                cost: { black: 2, white: 3, red: 0, blue: 0, green: 3 },
                state: 0,
                card_index: 1,
                tier: 2,
            },
            {
                color: "Black",
                points: 2,
                cost: { black: 0, white: 0, red: 2, blue: 1, green: 4 },
                state: 0,
                card_index: 2,
                tier: 2,
            },
            {
                color: "Black",
                points: 2,
                cost: { black: 0, white: 5, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 3,
                tier: 2,
            },
            {
                color: "Black",
                points: 2,
                cost: { black: 0, white: 0, red: 3, blue: 0, green: 5 },
                state: 0,
                card_index: 4,
                tier: 2,
            },
            {
                color: "Black",
                points: 3,
                cost: { black: 6, white: 0, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 5,
                tier: 2,
            },
            {
                color: "Blue",
                points: 1,
                cost: { black: 0, white: 0, red: 3, blue: 2, green: 2 },
                state: 0,
                card_index: 6,
                tier: 2,
            },
            {
                color: "Blue",
                points: 1,
                cost: { black: 3, white: 0, red: 0, blue: 2, green: 3 },
                state: 0,
                card_index: 7,
                tier: 2,
            },
            {
                color: "Blue",
                points: 2,
                cost: { black: 0, white: 5, red: 0, blue: 3, green: 0 },
                state: 0,
                card_index: 8,
                tier: 2,
            },
            {
                color: "Blue",
                points: 2,
                cost: { black: 0, white: 0, red: 0, blue: 5, green: 0 },
                state: 0,
                card_index: 9,
                tier: 2,
            },
            {
                color: "Blue",
                points: 2,
                cost: { black: 4, white: 2, red: 1, blue: 0, green: 0 },
                state: 0,
                card_index: 10,
                tier: 2,
            },
            {
                color: "Blue",
                points: 3,
                cost: { black: 0, white: 0, red: 0, blue: 6, green: 0 },
                state: 0,
                card_index: 11,
                tier: 2,
            },
            {
                color: "Green",
                points: 1,
                cost: { black: 0, white: 3, red: 3, blue: 0, green: 2 },
                state: 0,
                card_index: 12,
                tier: 2,
            },
            {
                color: "Green",
                points: 1,
                cost: { black: 2, white: 2, red: 0, blue: 3, green: 0 },
                state: 0,
                card_index: 13,
                tier: 2,
            },
            {
                color: "Green",
                points: 2,
                cost: { black: 1, white: 4, red: 0, blue: 2, green: 0 },
                state: 0,
                card_index: 14,
                tier: 2,
            },
            {
                color: "Green",
                points: 2,
                cost: { black: 0, white: 0, red: 0, blue: 0, green: 5 },
                state: 0,
                card_index: 15,
                tier: 2,
            },
            {
                color: "Green",
                points: 2,
                cost: { black: 0, white: 0, red: 0, blue: 5, green: 3 },
                state: 0,
                card_index: 16,
                tier: 2,
            },
            {
                color: "Green",
                points: 3,
                cost: { black: 0, white: 0, red: 0, blue: 0, green: 6 },
                state: 0,
                card_index: 17,
                tier: 2,
            },
            {
                color: "Red",
                points: 1,
                cost: { black: 3, white: 0, red: 2, blue: 3, green: 0 },
                state: 0,
                card_index: 18,
                tier: 2,
            },
            {
                color: "Red",
                points: 1,
                cost: { black: 3, white: 2, red: 2, blue: 0, green: 0 },
                state: 0,
                card_index: 19,
                tier: 2,
            },
            {
                color: "Red",
                points: 2,
                cost: { black: 0, white: 1, red: 0, blue: 4, green: 2 },
                state: 0,
                card_index: 20,
                tier: 2,
            },
            {
                color: "Red",
                points: 2,
                cost: { black: 5, white: 3, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 21,
                tier: 2,
            },
            {
                color: "Red",
                points: 2,
                cost: { black: 5, white: 0, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 22,
                tier: 2,
            },
            {
                color: "Red",
                points: 3,
                cost: { black: 0, white: 0, red: 6, blue: 0, green: 0 },
                state: 0,
                card_index: 23,
                tier: 2,
            },
            {
                color: "White",
                points: 1,
                cost: { black: 2, white: 0, red: 2, blue: 0, green: 3 },
                state: 0,
                card_index: 24,
                tier: 2,
            },
            {
                color: "White",
                points: 1,
                cost: { black: 0, white: 2, red: 3, blue: 3, green: 0 },
                state: 0,
                card_index: 25,
                tier: 2,
            },
            {
                color: "White",
                points: 2,
                cost: { black: 2, white: 0, red: 4, blue: 0, green: 1 },
                state: 0,
                card_index: 26,
                tier: 2,
            },
            {
                color: "White",
                points: 2,
                cost: { black: 0, white: 0, red: 5, blue: 0, green: 0 },
                state: 0,
                card_index: 27,
                tier: 2,
            },
            {
                color: "White",
                points: 2,
                cost: { black: 3, white: 0, red: 5, blue: 0, green: 0 },
                state: 0,
                card_index: 28,
                tier: 2,
            },
            {
                color: "White",
                points: 3,
                cost: { black: 0, white: 6, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 29,
                tier: 2,
            },
        ],
        [
            {
                color: "Black",
                points: 3,
                cost: { black: 0, white: 3, red: 3, blue: 3, green: 5 },
                state: 0,
                card_index: 0,
                tier: 3,
            },
            {
                color: "Black",
                points: 4,
                cost: { black: 0, white: 0, red: 7, blue: 0, green: 0 },
                state: 0,
                card_index: 1,
                tier: 3,
            },
            {
                color: "Black",
                points: 4,
                cost: { black: 3, white: 0, red: 6, blue: 0, green: 3 },
                state: 0,
                card_index: 2,
                tier: 3,
            },
            {
                color: "Black",
                points: 5,
                cost: { black: 3, white: 0, red: 7, blue: 0, green: 0 },
                state: 0,
                card_index: 3,
                tier: 3,
            },
            {
                color: "Blue",
                points: 3,
                cost: { black: 5, white: 3, red: 3, blue: 0, green: 3 },
                state: 0,
                card_index: 4,
                tier: 3,
            },
            {
                color: "Blue",
                points: 4,
                cost: { black: 0, white: 7, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 5,
                tier: 3,
            },
            {
                color: "Blue",
                points: 4,
                cost: { black: 3, white: 6, red: 0, blue: 3, green: 0 },
                state: 0,
                card_index: 6,
                tier: 3,
            },
            {
                color: "Blue",
                points: 5,
                cost: { black: 0, white: 7, red: 0, blue: 3, green: 0 },
                state: 0,
                card_index: 7,
                tier: 3,
            },
            {
                color: "Green",
                points: 3,
                cost: { black: 3, white: 5, red: 3, blue: 3, green: 0 },
                state: 0,
                card_index: 8,
                tier: 3,
            },
            {
                color: "Green",
                points: 4,
                cost: { black: 0, white: 3, red: 0, blue: 6, green: 3 },
                state: 0,
                card_index: 9,
                tier: 3,
            },
            {
                color: "Green",
                points: 4,
                cost: { black: 0, white: 0, red: 0, blue: 7, green: 0 },
                state: 0,
                card_index: 10,
                tier: 3,
            },
            {
                color: "Green",
                points: 5,
                cost: { black: 0, white: 0, red: 0, blue: 7, green: 3 },
                state: 0,
                card_index: 11,
                tier: 3,
            },
            {
                color: "Red",
                points: 3,
                cost: { black: 3, white: 3, red: 0, blue: 5, green: 3 },
                state: 0,
                card_index: 12,
                tier: 3,
            },
            {
                color: "Red",
                points: 4,
                cost: { black: 0, white: 0, red: 0, blue: 0, green: 7 },
                state: 0,
                card_index: 13,
                tier: 3,
            },
            {
                color: "Red",
                points: 4,
                cost: { black: 0, white: 0, red: 3, blue: 3, green: 6 },
                state: 0,
                card_index: 14,
                tier: 3,
            },
            {
                color: "Red",
                points: 5,
                cost: { black: 0, white: 0, red: 3, blue: 0, green: 7 },
                state: 0,
                card_index: 15,
                tier: 3,
            },
            {
                color: "White",
                points: 3,
                cost: { black: 3, white: 0, red: 5, blue: 3, green: 3 },
                state: 0,
                card_index: 16,
                tier: 3,
            },
            {
                color: "White",
                points: 4,
                cost: { black: 7, white: 0, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 17,
                tier: 3,
            },
            {
                color: "White",
                points: 4,
                cost: { black: 6, white: 3, red: 3, blue: 0, green: 0 },
                state: 0,
                card_index: 18,
                tier: 3,
            },
            {
                color: "White",
                points: 5,
                cost: { black: 7, white: 3, red: 0, blue: 0, green: 0 },
                state: 0,
                card_index: 19,
                tier: 3,
            },
        ],
    ],
};
