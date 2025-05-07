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




  


  






