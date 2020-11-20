export default{
  postCommand(request){
    fetch('/postcommand', request)
        .then(response => console.log(response))
        .then(re => console.log(re));
  },
  updateCommand(request){
    fetch('/updatecommand', request)
        .then(response => console.log(response))
        // .then(re => console.log(re));
  }
}