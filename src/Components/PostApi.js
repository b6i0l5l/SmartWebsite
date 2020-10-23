export default{
  postCommand(request){
    fetch('http://127.0.0.1:8000/api/postcommand', request)
        .then(response => console.log(response))
        .then(re => console.log(re));
  },
  updateCommand(request){
    fetch('http://127.0.0.1:8000/api/updatecommand', request)
        .then(response => console.log(response))
        // .then(re => console.log(re));
  }
}