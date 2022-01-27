# 4344

c = int(input()) # 학생수
result = [] 

for i in range(c):
    score = input().split()
    n = int(score.pop(0))
    for j in range(n):
        score[j] = int(score[j])
    aver = sum(score) / n
    over = 0
    for j in range(n):
        if score[j] > aver:
            over += 1
    result.append(round(over / n * 100, 3))

for res in result:
    print("{:.3f}%".format(res))