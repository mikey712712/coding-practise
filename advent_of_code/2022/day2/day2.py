with open("data.txt") as f:
    rounds = f.read().split("\n")
score = 0
# print(rounds)

outcomes = {
    "X": {
        "A": 3,
        "B": 1,
        "C": 2,
    },
    "Y": {
        "A": 4,
        "B": 5,
        "C": 6,
    },
    "Z": {
        "A": 8,
        "B": 9,
        "C": 7,
    },
}

for round in rounds:
    score += outcomes[round[2]][round[0]]
print(score)
