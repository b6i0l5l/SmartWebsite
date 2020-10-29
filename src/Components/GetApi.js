export default{
  async getCommand(username, device){
    let res = await fetch('http://127.0.0.1:8000/api/getcommand/'+ device+'?username='+username);
    let data = await res.json();
    return {"device":device, "command":data['command']};
  },
  async checkUserAccount(user){
    let res = await fetch('http://127.0.0.1:8000/api/check/useraccount?username='+ user['username']+'&password='+user['password'])
    let data = await res.json();
    console.log(data);
    return data;
  }
}
