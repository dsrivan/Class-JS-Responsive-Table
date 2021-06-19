class Person {
  constructor(obj) {
    this.name = (obj.name === undefined) ? "N/D" : obj.name;
    this.age = (obj.age === undefined) ? 0 : obj.age;
    this.email = (obj.email === undefined) ? "N/D" : obj.email;
  }

  getName() {
    return this.name;
  };

  getAge() {
    return this.age;
  }

  getEmail() { 
    return this.email;
  }

  setName(name) { 
    this.name = name; 
  }

  setAge(age) { 
    this.name = age; 
  }

  setEmail(email) { 
    this.email = email; 
  }

  createTR(){
    const tr = document.createElement('tr');
    for (let key in this) {

      const td = document.createElement('td');
      td.dataset.title = (key).toString().toLowerCase();
      const text = document.createTextNode(this[key]);

      td.appendChild(text);
      tr.appendChild(td);
    }
    document.querySelector("#tableContent tbody").appendChild(tr);
  }
}

export {Person};