# import my_own
# import random

# random_numbers=random.randint(1,10)
# print(random_numbers)
# print(my_own)

# print(random.random())
names=["desmond","lordsy","faith","kingsley"];
print(names)
names.append("beleh")
print(names)
print(f"desmond: {names[0]}")
print(f"desmond:  {names[1]}")
my_lenght=len(names)
another=names.insert(1,"brandon")
print(my_lenght)
print(another)

item_removed=names.pop(0)
items_removed2=names.pop(3)
print(item_removed)
print(items_removed2)
print("after removing itemfrom index 0")
print(names)
print("removing lordsy")
lordsy=names.remove("lordsy")
print(names)
my_numbers=[12,24,36,43,67]
print(my_numbers [1:3]);
print("second flavor")
print(my_numbers[:3])
