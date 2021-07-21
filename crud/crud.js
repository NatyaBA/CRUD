function modalPlus() {
    var modal = document.getElementById("modalPlus");
    modal.style.display = "block";
}

function closeModalEdit() {
  var modal = document.getElementById("modalEdit");
  modal.style.display = "none";
  var text = document.getElementById("textEdit");
  text.style.display = "none";
}

function closeModal() {
    var modal = document.getElementById("modalPlus");
    modal.style.display = "none";
    var text = document.getElementById("text");
    text.style.display = "none";

    id = document.getElementById('id');
    userName = document.getElementById('name');
    country = document.getElementById('country');
    age = document.getElementById('age');

    id.value = '';
    userName.value = '';
    country.value = '';
    age.value = '';
} 

var app = new function() {

    this.el = document.getElementById('user');
  
    this.id = ['01', '02', '03'];
    this.name = ['Nastia', 'Julia', 'Samanta'];
    this.countries = ['France', 'Germany', 'England'];
    this.age = ['37', '20', '54'];

    this.Count = function() {
    };
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.id.length > 0) {
        for (i = 0; i < this.countries.length; i++) {
          data += '<tr>';
          data += '<td>' + this.id[i] + '</td>';
          data += '<td>' + this.name[i] + '</td>';
          data += '<td>' + this.countries[i] + '</td>';
          data += '<td>' + this.age[i] + '</td>';
          data += '<td class="edit"><button onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td class="delete"><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.id.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      var modal = document.getElementById("text");
      modal.style.display = "none";

      id = document.getElementById('id');
      userName = document.getElementById('name');
      country = document.getElementById('country');
      age = document.getElementById('age');
      var one = id.value,
          two = userName.value,
          three = country.value,
          four = age.value;
      if (one && two && three && four) {
        
        this.id.push(one.trim());
        this.name.push(two.trim());
        this.countries.push(three.trim());
        this.age.push(four.trim());
        
        id.value = '';
        userName.value = '';
        country.value = '';
        age.value = '';
        
        this.FetchAll();
      }
      else {
        var modal = document.getElementById("text");
        modal.style.display = "block";
      } 

    };
  
    this.Edit = function (item) {
      var modal = document.getElementById("textEdit");
      modal.style.display = "none";

      var id = document.getElementById('edit-id'),
      userName = document.getElementById('edit-name'),
      country = document.getElementById('edit-country'),
      age = document.getElementById('edit-age');
  
      id.value = this.id[item];
      userName.value = this.name[item];
      country.value = this.countries[item];
      age.value = this.age[item];

      var modal = document.getElementById("modalEdit");
      modal.style.display = "block";
      self = this;
  
      document.getElementById('saveEdit').onsubmit = function() {
  
        var one = id.value,
          two = userName.value,
          three = country.value,
          four = age.value;
  
        if (one && two && three && four) {
         
          self.id.splice(item, 1, one.trim());
          self.name.splice(item, 1, two.trim());
          self.countries.splice(item, 1, three.trim());
          self.age.splice(item, 1, four.trim());
        
          self.FetchAll();
        
          closeModalEdit() 
        }
        else {
          var modal = document.getElementById("textEdit");
          modal.style.display = "block";
        } 
      }
    };
  
    this.Delete = function (item) {
      this.id.splice(item, 1);
      this.name.splice(item, 1);
      this.countries.splice(item, 1);
      this.age.splice(item, 1);
     
      this.FetchAll();
    };
    
  }
  
  app.FetchAll();