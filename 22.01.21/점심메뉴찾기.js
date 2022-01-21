var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length);

const new_foods = foods.filter((_,i) => i % 2 == 0)
document.write(new_foods)