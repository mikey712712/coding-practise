errors = 0


def sudoku_solver(grid):
    global errors
    linesX = None

    def solve():
        global errors
        loops = 0
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        linesX = grid
        linesY = []
        squares = []

        for i in range(9):
            yLine = []
            for j in range(9):
                yLine.append(linesX[j][i])
            linesY.append(yLine)

        for l in range(0, 9, 3):
            for k in range(0, 9, 3):
                square = []
                for i in range(l, l + 3):
                    for j in range(k, k + 3):
                        if linesX[i][j] != 0:
                            square.append(linesX[i][j])
                squares.append(square)

        block = None
        solved = False
        while not solved:
            loops += 1
            for line in linesX:
                if 0 in line:
                    solved = False
                    break
                else:
                    solved = True

            for i in range(9):
                if i % 3 == 0:
                    block = i
                for j in range(9):
                    print("yo")
                    neededNums = [num for num in numbers if num not in linesX[i]]
                    if linesX[i][j] == 0:
                        neededNum = [num for num in neededNums if num not in linesY[j]]
                        possibleNums = [
                            num
                            for num in neededNum
                            if num not in squares[j // 3 + block]
                        ]
                        print(possibleNums)
                        if len(possibleNums) == 1:
                            linesX[i][j] = possibleNums[0]
                            linesY[j][i] = possibleNums[0]
                            squares[j // 3 + block].append(possibleNums[0])
                        elif len(possibleNums) == 2 and errors == 0 and loops > 70:
                            linesX[i][j] = possibleNums[0]
                            linesY[j][i] = possibleNums[0]
                            squares[j // 3 + block].append(possibleNums[0])
                        elif len(possibleNums) == 2 and loops > 70:
                            linesX[i][j] = possibleNums[1]
                            linesY[j][i] = possibleNums[1]
                            squares[j // 3 + block].append(possibleNums[0])
        for i in range(9):
            for j in range(1, 10):
                if linesX[i].count(j) > 1:
                    errors += 1

    solve()
    while errors > 0:
        solve()
    return linesX


print(
    sudoku_solver(
        [
            [0, 0, 6, 1, 0, 0, 0, 0, 8],
            [0, 8, 0, 0, 9, 0, 0, 3, 0],
            [2, 0, 0, 0, 0, 5, 4, 0, 0],
            [4, 0, 0, 0, 0, 1, 8, 0, 0],
            [0, 3, 0, 0, 7, 0, 0, 4, 0],
            [0, 0, 7, 9, 0, 0, 0, 0, 3],
            [0, 0, 8, 4, 0, 0, 0, 0, 6],
            [0, 2, 0, 0, 5, 0, 0, 8, 0],
            [1, 0, 0, 0, 0, 2, 5, 0, 0],
        ]
    )
)
