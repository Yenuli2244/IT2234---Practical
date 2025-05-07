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
- To fetch only the name field from each document.
- To exclude the default _id field from the results.
- Useful for displaying clean lists, dropdowns, or exports where _id is not needed.

![Screenshot (198)](https://github.com/user-attachments/assets/c996a9e7-eee3-47d0-aadd-11e7b4b79d2d)
















  


  






