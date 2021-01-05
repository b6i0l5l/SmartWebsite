export default{
  async getCommandByDeviceID(username, action){
    let res = await fetch('/getcommand/'+ action+'?username='+username);
    let data = await res.json();
    return {"action":action, "command":data['command']};
  },
  async checkUserAccount(user){
    let res = await fetch('/check/useraccount?username='+ user['username']+'&password='+user['password'])
    let data = await res.json();
    console.log(data);
    return data;
  },
  async getCommandsByUser(user){
    let res = await fetch('/getallcommands/'+user)
    let data = await res.json();
    console.log(data);
    return data;
  },
  async getCommandsAndDevicesByUser(user){
    let res = await fetch('/getdevicesinfos/'+user)
    let data = await res.json();
    console.log(data);
    return data;
  },
  async getTriggerByCommand(action){
    let res = await fetch('/gettrigger/'+action)
    // let data = await res.json();
    console.log(res);
    // return data;
  },
  async getTriggerByLevenshtein(command, username){
    let res = await fetch('/gettrigger/levenshtein/'+command+'?username='+username)
    // let data = await res.json();
    console.log(res);
    // return data;
  }

}
