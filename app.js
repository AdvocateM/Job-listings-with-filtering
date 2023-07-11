function getData() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) =>{
      // console.log(json)
      dom(json)
    });

}

function dom(data){
  // Dom
  const columns = document.querySelector('.container')
  // console.log(data)

  data.map(names => {
    // const decide = names.new ? `<li class="new">"New!"</li>` : `<p></p>`;
  const decide = names.new ? `<a class="nav-link btn btn-success new" href="#" role="button">New!</a>` : `<p></p>`;
    const btn1 = names.new ? `<button class="btn btn-primary" type="submit">Button</button>` : `<p></p>`
    

    // const loop = array.length >1 ? `<li>"New!"</li>` : `<p></p>`

    const featured = names.featured ? `<a class="nav-link btn btn-dark  feature " href="#" role="button">FEATURED</a>` : `<p></p>`;
  
    
    const array = names['languages'],
      buttons = array.map((names1) => {
        // thank you riyaas
        console.log(names1)
        // return `<button class="btn btn-sm btn-outline-secondary" type="button">${names1}</button>`
        return `<button class="btn btn-sm btn-outline-secondary" type="button">${names1}</button>`
      })
    
    const column =`
    
    <div class="col-sm-9 bg-light p-3 border">
      <div class="title">
        <nav class="navbar bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="${names.logo}" alt="Logo" width="30" height="24">
            </a>
          </div>
        </nav>
      </div>

      <div class="title">
      <nav class="nav">
        <a class="nav-link active header" aria-current="page" href="#">${names.company}</a>
        ${decide}
        ${featured}
      </nav>
      </div>
      

      <br>
        <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">${names.position}r</a>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success me-2" type="button">${names.role}</button>
            <button class="btn btn-sm btn-outline-secondary" type="button">${names.level}</button>
            ${buttons}
          </form>
        </div>
      </nav>


      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">${names.postedAt}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${names.contract}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${names.location}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div > 

  </br>
  `;

  // console.log(names.company)
  
  columns.innerHTML = columns.innerHTML + column;
  
  
})

    const footer = `<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://mrmaroga.co.za">Advocate</a>.
    </div>`
  columns.innerHTML = columns.innerHTML + footer;
}

window.onload = getData;
