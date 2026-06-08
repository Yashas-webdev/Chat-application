export const sendMessage = async(req,res)=>{
    try{
        const senderId = req.id;
        const recieverId = req.params.id;
        const {message} = req.body;

        let getConversation = await Conversation.findOne({
            participants:{$all:[senderId,recieverId]},
        });

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId,recieverId]
            })
        };

        const newMessage = await Message.create({
            senderId,
            recieverId,
            message
        });
        if(newMessage){
            gotConversation.message.push(newMessage._id);
        };
        await gotConversation.save();
    }catch(error){
        console.log(error);
    }
}