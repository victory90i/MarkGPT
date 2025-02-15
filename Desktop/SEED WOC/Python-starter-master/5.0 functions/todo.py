# we need a list
# alias empty bucket
todo_list=[]
# first functionality
# add to list
def add_todo():
  # what do you want to add?
  item=input("enter a todo✝✡:")
  todo_list.append(item)
  print("items added successfully")
#DELETE FUNCTIONALITY
def delete_todo():
  if len(todo_list)==0:
    print("ooh,list is empty💔😥")
  else:
    for index, item in enumerate(todo_list):
      # print("todo items👀🐱‍🚀\n")
      print(f"{index + 1} {item}")
  number_to_remove=int(input("enter the item number to remove🐱‍🏍"))-1
  if number_to_remove<0 or number_to_remove>=len(todo_list):
    print("out of range 🤸‍♀️🔍-----")
  else:
    del todo_list[number_to_remove]
    print("item removed successfully...🎉")
def update_todo():
  if len(todo_list)==0:
    print("ooh,list is empty💔😥")
  else:
    for index, item in enumerate(todo_list):
      # print("todo items👀🐱‍🚀\n")
      print(f"{index + 1} {item}")
    number_to_update=int(input("enter the item number to remove🐱‍🏍"))-1
  if  number_to_update<0 or  number_to_update>=len(todo_list):
    print("out of range 🤸‍♀️🔍-----")
  else:
    new_item=input("enter a new item")
    todo_list[number_to_update]=new_item
def view_list():
  if len(todo_list)==0:
    print("ooh, list is empty🎃")
  else:
    #show items inside list
    for index, item in enumerate(todo_list):
      print(f"{index}. {item}")
while True:
  print("my todo list app:")
  print("1.add to do ")
  print("2.remove from todo_list")
  print("3.update todo")
  print("4.view todo")
  print("5.quit")
  choice=input("enter num to compute")
  if choice=="1":
    add_todo()
  elif choice=="2":
    delete_todo()
  elif choice=="3":
    update_todo()
  elif choice=="4":
    view_list()
  elif choice=="5":
    break
  else:
    print("invalid option choose between the range 1-5 \n")
    print("please try again")
