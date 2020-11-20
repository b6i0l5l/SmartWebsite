export default {
  rquest(action,data){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'action': action, 'command': data })
      };
      return requestOptions;
  }
};