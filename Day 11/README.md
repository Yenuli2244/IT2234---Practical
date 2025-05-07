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

  






