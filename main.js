axios.get('http://localhost:3000/cats')
  .then(result => {
    const cats = result.data.data
    const items = cats.reduce((acc, cat) => acc+ `<li>${cat.name}</li>`, '')
    document.querySelector('ul').innerHTML = items
  })
  .catch(err => {
    console.log('Do not worry, everything is fine.')
  })

  let submit = document.querySelector(".submitCat");

  const postCat = (event) => {
    event.preventDefault();
    console.log("hi")
    let input = document.querySelector(".form-input");
    if(input.value){
      axios.post('http://localhost:3000/cats', {name: input.value})
      .then((result)=>{
        const newCatData = result.data.data;
        const li = document.createElement("li")
        li.innerHTML = newCatData.name

        document.querySelector('ul').append(li);
      })
    }
  }


let newCatButton = document.querySelector("#posts-create");

const showForm = () => {
  let jumbotron = document.querySelector(".jumbotron .container")
  let form = document.createElement("form");

  let formInput = document.createElement("input");
  formInput.classList.add("form-input");
  formInput.setAttribute("type", "text");

  let submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit Cat Name");
  submit.classList.add("submitCat");

  form.append(formInput);
  form.append(submit);
  jumbotron.append(form);

  form.addEventListener("submit", postCat)
}

newCatButton.addEventListener("click", showForm);
