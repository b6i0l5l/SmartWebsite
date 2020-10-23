export default {
  rquest(device,data){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'device': device, 'command': data })
      };
      return requestOptions;
  }
};