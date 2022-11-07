// let mainContent = document.getElementById("paragraph-text")



function makeMoney(){
    // // let mainTitle = document.querySelector("paragraph-text");
    // // mainTitle.innerText = "Welcome "+ document.getElementById("#coinCount").value;

    // let mainTitle2 = document.querySelector("paragraph-text2");
    // mainTitle2.innerText = "Welcome "+ document.getElementById("select1").value;
    
   
    selectElement2 = document.querySelector('#coinCount');
    output2 = selectElement2.value;
    


    
    selectElement = document.querySelector('#select1');
     output = selectElement.value;
   
     output = (`${output.repeat(output2)}`);
     
     
    //adding consecutively to p text 
    
    document.querySelector('.paragraph2-text').textContent += output;
   
    // if (output==="penny"){
    //     output.classList.add(".penny")
    // }
    console.log(output)
    

    
    // let testThang = document.getElementById("test");
    // testThang.classList.add("penny");
    // console.log(testThang);


  document.querySelector('.paragraph2-text').addEventListener('click', function handleClick(event) {
  event.target.remove();
});
}









