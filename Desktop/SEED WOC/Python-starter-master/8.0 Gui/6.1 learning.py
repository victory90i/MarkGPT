#FUNCTIONS WITH OUTPUT

# def say_name(name1,name2):
#   name_one=name1.title()
#   name_two=name2.title()

#   return f"{name_one} {name_two}"

  
# names1=input("enter the first name")
# names2=input("enter your second name")
#   #am passing this now as arguments
# result=say_name(names1,names2)
# print(result)


def loop_num():
  sum=0 
  for i in range(1,7):
    if i==3:
      return
    print(i)
    sum+=i
  return sum
loop_num()
# nested dictionary
person={
  "emma":{"age":20,"department":"DAS","gender":"male"},
  "paul":{"age":20,"department":"SWE","gender":"male"},
  "john":{"age":19,"department":"CNMS","gender":"male"},
  "mary":{"age":20, "department":"DAS","gender":"female"}
}
print(person["john"]["age"])

print(person["peter"]["gender"])