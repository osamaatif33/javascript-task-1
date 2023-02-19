let elnum= document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
resultes = document.querySelector(".results");

form[0].onsubmit = (el) => {
    el.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove());

    for (let i = 1; i<= elnum.value; i++) {
        let myel = document.createElement(type.value);
        let mytext = document.createTextNode(text.value);

        myel.className="box";
        myel.title="element";
        myel.id=`id-${i}`;

        myel.style.display="inline-block";
        myel.style.width="200px";
        myel.style.margin="20px";
        myel.style.padding="10px";
        myel.style.color="white";
        myel.style.backgroundColor="blue";
        myel.style.textAlign="center";
        myel.style.borderRadius="5px"

        myel.appendChild(mytext);
        resultes.appendChild(myel);
    }
}
