//buscar estado
function populateUf() {

  var selectUf = document.querySelector("#uf")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {

      for (const state of states) {


        selectUf.innerHTML += `<option value="${state.id}">
      ${state.sigla}</option>`;
      }

    })
}

populateUf();

function getCitys(event) {
  const selecCity = document.querySelector("#city");

  //colocar nome do state em vez do id
  
  const stateIn = document.querySelector("#stateIN");
  
  const indexSelState = event.target.selectedIndex;
  
  stateIn.value = event.target.options[indexSelState].text;
  
  console.log(indexSelState)

  //resetar campo

  //puxar municipio pelo ID do estado
  const id = event.target.value;
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
    .then(res => res.json())
    .then(citys => {
      selecCity.innerHTML="";
      selecCity.disabled=true;
      for (const city of citys) {
        selecCity.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }
      selecCity.disabled = false
    })


}

var stateUf = document.querySelector("#uf")
stateUf = addEventListener("change", getCitys);



// itens de coleta

const itensToCollect = document.querySelectorAll(".itens-grid li")

for(const item of itensToCollect){
  item.addEventListener("click",handleSelectedItem)
}

const itemColleted = document.querySelector('.items')

let selectedIten = []
function handleSelectedItem(event){
  const itemLi = event.target;
  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id

  const alarySelected = selectedIten.findIndex(item=>item == itemId)
  
  
  //se ja estiver selecionado
  if(alarySelected!=-1){
    //tirar da seleção
    const filteredItens = selectedIten.filter(item=>{
      const itemIsDiferent = item!= itemId
      return itemIsDiferent
    })
    selectedIten = filteredItens;
  }else{
    selectedIten.push(itemId);
  }

  itemColleted.value=selectedIten
}

  
