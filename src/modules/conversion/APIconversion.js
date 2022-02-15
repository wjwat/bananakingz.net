export default class Random {
  static getObject () {
    return new Promise(function(resolve,reject){
      const url = `https://wowthatsbig.net/api`;
      let request = new XMLHttpRequest();
      request.onload = function(){
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    })
  }
}