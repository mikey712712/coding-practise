elves = []
total = 0
highestTotal = 0
index = 0
with open("data.txt") as f:
    data = f.read().split("\n\n")

for element in data:
    elves.append(element.split("\n"))

for elf in elves:
    elfTotal = 0
    for food in elf:
        elfTotal += int(food)
    if elfTotal > highestTotal:
        index = elves.index(elf)
        highestTotal = elfTotal

elves[index] = [0]
print(index)
total += highestTotal
highestTotal = 0

for elf in elves:
    elfTotal = 0
    for food in elf:
        elfTotal += int(food)
    if elfTotal > highestTotal:
        index = elves.index(elf)
        highestTotal = elfTotal

elves[index] = [0]
print(index)
total += highestTotal
highestTotal = 0

for elf in elves:
    elfTotal = 0
    for food in elf:
        elfTotal += int(food)
    if elfTotal > highestTotal:
        index = elves.index(elf)
        highestTotal = elfTotal

elves[index] = [0]
print(index)
total += highestTotal

print(total)
