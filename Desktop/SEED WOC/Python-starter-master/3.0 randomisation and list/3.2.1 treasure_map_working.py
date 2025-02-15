row1=['✅','✅','✅'];
row2=['✅','✅','✅'];
row3=['✅','✅','✅'];
#print (map[0][1])
map=[row1,row2,row3]
print(f"{row1}\n{row2}\n{row3}");
#take user position
position=input("please enter the position you want to mark as visited for example'B1'\n")
#EG B1 and so on
letter=position[0].upper()
number=position[1]
print(f"letter.{letter} and number:{number}"); 

ABC=["A","B","C"];
index_letter=ABC.index(letter);
print("printing the index of letter");
print(index_letter);
#convert the number to index
index_number=int(number)-1;
print("my numbers...........");
print(index_number);
#using notation of nested list
map[index_letter][index_number]='X';
print("chosen position.......");
print(f"{row1}\n,{row2}\n,{row3}")




