# 📖 Lecture Time Queries --> MongoDB_Queries.txt
## 🗃️ 1. Delete the Database
```db.dropDatabase()``` This command is used in MongoDB to delete the currently selected database.

- ```db``` refers to the current database you're working in.
- ```.dropDatabase()``` is a method that drops (deletes) the entire database, including:
  - All collections (tables)
  - All documents (records)
  - All indexes
    
![Screenshot (190)](https://github.com/user-attachments/assets/658115f5-8cf1-45d3-b934-b4ab7c78ffdf)

## 📁 2.Delete the collection
```db.sampledata.drop()``` This command in MongoDB is used to delete a specific collection in the current database.

- ```db```  refers to the current database you're using.
- ```sampledata``` is the name of the collection you want to delete.
- ```.drop()``` deletes that collection entirely.

### ✅ What it does:
- Deletes the collection named sampledata.
- All documents inside it are removed.
- Indexes on the collection are removed.
  
![Screenshot (191)](https://github.com/user-attachments/assets/f49837c8-e760-45d7-833d-8dc436a625d4)

## 📝 3. Delete a Document
```db.degrees.deleteOne({_id:ObjectId('681a3cc10b635026ae4a2a1f')})``` This command is used to delete a single document from the ```degrees``` collection, based on its ```_id```.

- ```db.degrees``` – Refers to the ```degrees``` collection in the current database.
- ```deleteOne()``` – Deletes only the first matching document.
- ```{_id: ObjectId('...')}``` – Specifies the document to delete by its unique ```_id``` (MongoDB uses ObjectId for ```_id``` by default).

![Screenshot (196)1](https://github.com/user-attachments/assets/a97f63fe-937c-4a41-8cfd-1c54d197433f)

## 🔍 4. Field Projection
i). ```db.degrees.find({}, { name: 1, duration: 1 })``` This command is used to retrieve only specific fields (```name``` and ```duration```) from all documents in the ```degrees``` collection. 

### ✅ Why Use It:
- To view only the necessary fields, not the entire document.
- Helps in reducing data transfer, especially when documents have many fields.
- Makes query results easier to read and work with.

![Screenshot (196)](https://github.com/user-attachments/assets/2dd5ed06-7b7b-447d-bb60-3dc80a37e47a)

ii). ```db.degrees.find().projection(['name'])``` This command is used to retrieve only the ```name``` field from all documents in the ```degrees``` collection (along with ```_id``` by default).

### ✅ Why Use It?
- To focus on specific data (e.g., only degree names)
- To reduce the amount of data returned (faster queries, especially in large collections)
- Useful in reports, dropdowns, or lists where only one field (like names) is needed

![Screenshot (197)](https://github.com/user-attachments/assets/fc094f2b-9bcc-45a9-832c-bde712a2e4e6)

iii).```db.degrees.find().projection([{'name':1},{'_id':-1}])``` This command is used to retrieves only the ```name``` field from each document in the ```degrees``` collection.

### ✅ Why Use It?
- To fetch only the ```name``` field from each document.
- To exclude the default ```_id``` field from the results.
- Useful for displaying clean lists, dropdowns, or exports where ```_id``` is not needed.

![Screenshot (198)](https://github.com/user-attachments/assets/c996a9e7-eee3-47d0-aadd-11e7b4b79d2d)

## 🎯 5. Select Certain Fields
```db.degrees.find({}, { name: 1, _id: 0 }).pretty()``` This command is used to retrieve only the ```name``` field from all documents in the ```degrees``` collection and exclude the ```_id``` field, then format the result for better readability.

- ```db.degrees``` → Accesses the degrees collection
- ```find({}, { name: 1, _id: 0 })``` →
  - ```{}```: no filter (selects all documents)
  - ```{ name: 1, _id: 0 }```: projection to include ```name```, exclude ```_id```
- ```.pretty()``` → Makes the output easy to read by formatting it nicely

![Screenshot (199)](https://github.com/user-attachments/assets/da81bda8-161e-4ea1-9ea3-77d6e4f192e3)

## ❌ 6. Delete Many Documents
```db.degrees.deleteMany({ duration: { $lt: 4 } })``` This command is used to delete all documents from the degrees collection where the duration is less than 4.

- ```deleteMany()``` → Removes all documents that match the condition
- ```{ duration: { $lt: 4 } }``` → Condition: ```duration``` is less than 4
  - ```$lt``` means "less than"

![Screenshot (201)](https://github.com/user-attachments/assets/7daf7080-d3ed-43d1-bb15-f9ea8de636d4)

## 🖍️ 7. Update One Document
```db.degrees.updateOne({_id:ObjectId('681a3a350b635026ae4a2a1a')},{$set:{name:'BIT',duration:3}})```` This command is used to update one document in the ```degrees``` collection with the specific``` _id``` to set:
  - ```name``` as ```'BIT'```
  - ```duration``` as ```3```


- ```updateOne(...)``` → Updates only the first matching document
- ```{ _id: ObjectId('...') }``` → Finds the document by its unique ID
- ```$set: { name: 'BIT', duration: 3 }``` → Modifies or adds these fields

![Screenshot (203)1](https://github.com/user-attachments/assets/2f385b2a-40aa-4c29-ac54-66bf76ea1797)
![Screenshot (204)](https://github.com/user-attachments/assets/24dcd7c8-24c1-4749-88e4-e1709a08501d)

## ⬆️ 8. Increase Field Value
```db.degrees.updateMany({duration:{$gte:4}},{$inc:{duration:1}})``` This command is used to increase the ```duration``` by 1 for all documents in the ```degrees``` collection where ```duration``` is greater than or equal to 4.

- ```updateMany(...)``` → Updates all matching documents
- ```{ duration: { $gte: 4 } }``` → Matches documents where ```duration``` ≥ 4
- ```$inc: { duration: 1 }``` → Increases ```duration``` by 1

![Screenshot (205)](https://github.com/user-attachments/assets/4297c090-9f91-4be2-a4df-d29825ae4804)

## ➕ 9. Add Value to Array Field
```db.students.updateOne({regno:"2021IT005"},{$push:{skills:"PHP"}})``` This command is used to add ```"PHP"``` to the ```skills``` array of the student whose ```regno``` is ```"2021IT005"```.

- ```updateOne(...)``` → Updates one document that matches
- ```{ regno: "2021IT005" }``` → Finds the student by registration number
- ```$push: { skills: "PHP" }``` → Adds ```"PHP"``` to the end of the ```skills``` array

![Screenshot (206)](https://github.com/user-attachments/assets/f7a87294-9b89-4987-a386-8ade24a24be8)


































  


  






