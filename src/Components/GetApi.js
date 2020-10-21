export default{
  async getCommand(device){
    let res = await fetch('http://127.0.0.1:8000/api/getcommand/'+ device)
    let data = await res.json();
    return data['command'];
  }
}
