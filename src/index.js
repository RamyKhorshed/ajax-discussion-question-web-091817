button = document.querySelector('button')

button.addEventListener('click',function(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( response => new User(response.results[0]) )
})



class User {
  constructor(properties){
    this.name = properties.name.title + " " + properties.name.first+ " " + properties.name.last ;
    this.phone = properties.phone;
    this.cell = properties.cell;
    this.email = properties.email;
    this.dob = properties.dob;
    this.street = properties.location.street;
    this.city = properties.location.city;
    this.state = properties.location.state;
    this.postcode = properties.location.postcode;
    this.constructor.all.push(this)

    this.populateFields()
  }

  populateFields(){
    let labels = document.querySelectorAll('label')
    labels[0].innerText = labels[0].innerText.concat(this.name);
    labels[1].innerText = labels[1].innerText.concat(this.email);
    labels[2].innerText = labels[2].innerText.concat(this.street);
    labels[3].innerText = labels[3].innerText.concat(this.city);
    labels[4].innerText = labels[4].innerText.concat(this.state);
    labels[5].innerText = labels[5].innerText.concat(this.postcode);
    labels[6].innerText = labels[6].innerText.concat(this.phone);
    labels[7].innerText = labels[7].innerText.concat(this.cell);
    labels[8].innerText = labels[8].innerText.concat(this.dob);
  }

}

User.all = []
