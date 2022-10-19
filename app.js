const add = require('./add')
const read = require('./read')
const del = require('./del')
const update = require('./update')
//get users input
const cmd = process.argv;

if(cmd[2] === 'add') {
    // build the object
    const note = { 
        "id": cmd[3],
        "title": cmd[4],
        "body": cmd[5]
    }

    // get note.txt content
    const oldNote = read()
   
    // add this newNote to Note.txt
    add(note,oldNote);
    console.log (add)
}

// Read Notes.txt
if(cmd[2] === 'read') // import present
 {
    const present = require('./present')
    present(read())
    console.log (read)
}


if(cmd[2] === "delete") {
    const id = cmd[3]
    const oldNote = read ()
    del (id, oldNote)
    console.log (del)
    }
 
    if (cmd[2]== 'update') {
        note  = {
            id: cmd[3],
            title: cmd[4],
            body: cmd[5]
        }
    
        const oldNote = read ()
        update (note, oldNote)
        const present = require('./present')
        present(read())
        console.log (update)
    
     }  