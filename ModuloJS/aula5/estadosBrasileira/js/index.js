const getUfs = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const myResponse = await response.json();

    console.log(response);
    console.log(myResponse);

    let addLi = ""
    let itemLi = ""

    for (let i = 0; i < myResponse.length; i++) {
        addLi = document.createElement("li");
        itemLi = document.createTextNode(myResponse[i].sigla);

        addLi.appendChild(itemLi);
        document.getElementById("ufs").appendChild(addLi);
    }

}

getUfs();
