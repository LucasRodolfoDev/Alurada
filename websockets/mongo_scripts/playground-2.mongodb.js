// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('alura-websockets');

// Create a new document in the collection.
db.getCollection('documentos').insertOne({
        "nome": "Socket.io",
        "texto": "Socket.io...."
    }
);
