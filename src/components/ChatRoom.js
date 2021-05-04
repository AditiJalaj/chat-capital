const ChatRoom = ({handleLogOut}) => {
    return ( <div>
       <h1>You are logged in</h1> 
       <button onClick={handleLogOut}>Logout</button>
        </div>
        );
}
 
export default ChatRoom;