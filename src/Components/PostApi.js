export default{
  postCommand(request){
    fetch('http://127.0.0.1:8000/api/command', request)
        .then(response => console.log(response))
        .then(re => console.log(re));
  }
}