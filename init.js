const mongoose  = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection Successful");
})
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    
}

let allChats = [
    {
    from: "Amit",
    to: "Rahul",
    msg: "Did you complete the assignment?",
    created_at: new Date(),
},
{
    from: "Sneha",
    to: "Kavya",
    msg: "Please share the notes for DBMS",
    created_at: new Date(),
},
{
    from: "Rohan",
    to: "Anjali",
    msg: "Are you coming to college tomorrow?",
    created_at: new Date(),
},
{
    from: "Pooja",
    to: "Neha",
    msg: "Send me your project files",
    created_at: new Date(),
},
{
    from: "Vikas",
    to: "Suresh",
    msg: "Let's meet for study group",
    created_at: new Date(),
},
{
    from: "Meena",
    to: "Priya",
    msg: "Can you explain this topic?",
    created_at: new Date(),
},
{
    from: "Arjun",
    to: "Riya",
    msg: "I will send you the PDF",
    created_at: new Date(),
}
]
Chat.insertMany(allChats);


