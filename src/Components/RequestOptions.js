export default {
  rquest(data){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'id': 201, 'device': 'plug1', 'command': data })
      };
      return requestOptions;
  }
};