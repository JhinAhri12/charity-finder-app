const apiKey = process.env.REACT_APP_CHARITY_API_KEY


 const url = `https://api.globalgiving.org/api/public/projectservice/countries/FR/projects?api_key=${apiKey}`

 export default function Search() {

 return (
    <>
  <input type="text" onKeyPress={query} />
      <div className="row"></div>
    </>
   )

 }

 async function query() {
  const response = await fetch(url)
  const charity = await response.text();
  const xmlDoc = new window.DOMParser().parseFromString(charity, "text/xml")
  const lengthXml = xmlDoc.getElementsByTagName("project").length;
  const row = document.querySelector('.row')
  let y = 0;
  // console.log(lengthXml,xmlDoc);
  while ( y < lengthXml)
  {
    console.log(xmlDoc.getElementsByTagName("title")[y].textContent);
    if(xmlDoc.getElementsByTagName("active")[y].textContent !== "false" )
    {
      console.log(xmlDoc.getElementsByTagName("title")[y].textContent);
        row.innerHTML += `<div class="col-md-4  mt-3"> <div class="card mb-4 box-shadow"> <img class="card-img-top" src="https://picsum.photos/536/354" alt="Card image cap"> <div class="card-body"> <p class="card-text">${xmlDoc.getElementsByTagName("title")[y].textContent}</p> <div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> </div> <small class="text-muted">9 mins</small> </div> </div> </div> </div>`;
      }
      y++;
    }
}
