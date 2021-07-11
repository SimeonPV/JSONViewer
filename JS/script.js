 let file = document.getElementById('input');
      file.onchange = function(e) {
        let ext = this.value.match(/\.([^\.]+)$/)[1];
        switch (ext) {
          case 'json':
            break;
          default:
            alert('Выберите файл .JSON');
            this.value = '';
        }
      };

    let filejson = document.getElementById('input');
   
    filejson.addEventListener('change', function(event) {
    let file =  filejson.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
    const textJSON = event.target.result;
    let array = textJSON.split('\n');
    document.write(array);

    let spaces = 4;
 
    let jsonString = JSON.stringify(array);
    let jsonObj; 
    try{
      jsonObj = JSON.parse(jsonString);
    }
    catch(err){
      console.log(err.message);
    }
   
    function parseJSON(obj, nesting = 0){
      if(obj instanceof Object){
        for (const [key, value] of Object.entries(obj)) {
          console.log("-".repeat(nesting * spaces), key);
          parseJSON(value, nesting + 1);
        }
      }
      else{
        console.log("-".repeat(nesting * spaces), obj);
        return;
      }
    }
     parseJSON(jsonObj);


      }
  const testJSON = reader.readAsText(file);

      });