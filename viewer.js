const serverURL = "viewit.loca.lt";

function viewit(url) {
  function _get(url, method, callback, params = null) {
    var obj;
    try {   
      obj = new XMLHttpRequest();  
    } catch(e){   
      try {
        obj = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          obj = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {
          return false;
        }
      }
    }
    obj.onreadystatechange = function() {
      if (obj.readyState == 4) {
        callback(obj);
      }
    }
    obj.open(method, url, true);
    obj.send(params);
    return obj;
  }
  return _get("https://" + serverURL + "/action?action=view&url=" + encodeURIComponent(url), "get", data => {
    return data;
  });
}
