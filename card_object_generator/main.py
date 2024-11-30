with open("cards.txt","r") as f:
    lines = []
    for line in f:
        lines.append(line.strip().split())
    cards = [[],[],[]]
    for card in range(len(lines)):
        if card%18<8:
            cards[0].append(
                {
                    "color": lines[card][0],
                    "points": int(lines[card][1]),
                    "cost": {
                        "black": int(lines[card][2]),
                        "white": int(lines[card][3]),
                        "red": int(lines[card][4]),
                        "blue": int(lines[card][5]),
                        "green": int(lines[card][6])
                    },
                    "state": 0
                }
            )
        elif 8<=card%18<14:
            cards[1].append(
                {
                    "color": lines[card][0],
                    "points": int(lines[card][1]),
                    "cost": {
                        "black": int(lines[card][2]),
                        "white": int(lines[card][3]),
                        "red": int(lines[card][4]),
                        "blue": int(lines[card][5]),
                        "green": int(lines[card][6])
                    },
                    "state": 0
                }
            )
        else: 
            cards[2].append(
                {
                    "color": lines[card][0],
                    "points": int(lines[card][1]),
                    "cost": {
                        "black": int(lines[card][2]),
                        "white": int(lines[card][3]),
                        "red": int(lines[card][4]),
                        "blue": int(lines[card][5]),
                        "green": int(lines[card][6])
                    },
                    "state": 0
                }
            )
for t in range(len(cards)):
    for i in range(len(cards[t])):
        cards[t][i]["card_index"] = i
        cards[t][i]["tier"] = t+1
print(str(cards).replace("'",'"'))