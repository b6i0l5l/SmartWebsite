export default{
  async getCommandByDeviceID(username, action){
    let res = await fetch('http://127.0.0.1:8000/api/getcommand/'+ action+'?username='+username);
    let data = await res.json();
    return {"action":action, "command":data['command']};
  },
  async checkUserAccount(user){
    let res = await fetch('http://127.0.0.1:8000/api/check/useraccount?username='+ user['username']+'&password='+user['password'])
    let data = await res.json();
    console.log(data);
    return data;
  },
  async getCommandsByUser(user){
    let res = await fetch('http://127.0.0.1:8000/api/getallcommands/'+user)
    let data = await res.json();
    console.log(data);
    return data;
  },
  async getCommandsAndDevicesByUser(user){
    let res = await fetch('http://127.0.0.1:8000/api/getdevicesinfos/'+user)
    let data = await res.json();
    console.log(data);
    return data;
  },
  async getTriggerByCommand(action){
    let res = await fetch('http://127.0.0.1:8000/api/gettrigger/'+action)
    let data = await res.json();
    console.log(data);
    return data;
  }

}
