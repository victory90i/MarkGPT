student={
  "name" : "ngwa",
  "age" : 24,
  "department" : "DAS",
  "gender" : "male"
}

# accessing elements inside of the dictionar
#write a loop to print all the iems in dictionary
student["gender"]="female"
student["animal"]="dog"
student["country"]="peru"
print(student)

# i want to update the value of age

student["age"]=22

# i want to delete the item name
del student['name']

#print values
for i in student:
  print(student[i])
    #check the existence of a key in a dictionary
print("name" in student)
for keys in student:
  print(keys)
  #print keys and value
  for key,value in student.items():
    print(f"{key}:{value}")
