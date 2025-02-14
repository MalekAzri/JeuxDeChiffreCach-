var elt1=document.querySelectorAll(".button");


elt1.forEach(x=>x.addEventListener("click",
    function(e){
        var text=e.target.textContent;
        document.body.innerHTML='';
        var t;
        if(text=="Facile"){

            alert("vous avez 20 tentatives!");
            t=20;
            document.body.style.cssText="background-image:url(https://static.vecteezy.com/system/resources/previews/024/675/760/non_2x/green-background-hd-wallpaperss-free-download-free-vector.jpg)";
            document.body.innerHTML = 
            `

            <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h3 class="text-center mb-4">Devinez le chiffre!</h3>
                                <div class="mb-3 w-75">
                                    <label for="exampleInput" class="form-label">Entrez un nombre</label>
                                    <input type="number" class="saisie form-control" id="exampleInput" placeholder="Saisissez un nombre" required>
                                </div>
                                <button type="submit" class="submit btn btn-outline-success w-75">Soumettre</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="ligne down bg-success p-2 text-dark bg-opacity-50 text-center">Le niveau Facile a été sélectionné. Devinez le chiffre entre 0 et 10! </div>


        `;
            let elt2=document.querySelector(".saisie");
            let elt3=document.querySelector(".submit");
            elt2.addEventListener("keydown", function(e) {
                if (e.key === "Enter") {  
                    elt3.click(); 
                }
            });
            
            let number=Math.floor(Math.random()*11);
            console.log(number);
            
            elt3.addEventListener("click",function(e){
                if(elt2.value!=number){
                    t=t-1;
                    let child=document.body.querySelector(".ligne");
                    child.classList.replace("bg-success", "bg-danger");
                    console.log("child="+child.innerHTML);
                    child.innerHTML=`Vous avez mal deviné. Il vous reste ${t} tentatives!`;
                    console.log("child="+child.innerHTML);
                    setTimeout(() => {
                        let rep = confirm("Voulez-vous continuer ?");
                        
                        if (rep && t!=0) {
                            child.classList.replace( "bg-danger","bg-success");

                            child.innerHTML = "Réessayez avec un nouveau chiffre !";
                        } 
                        else if(rep && t==0){
                            test();
 
                         }
                        else {
                        location.reload();
                        }
                    }, 100); 

                
            









                }
                else if(+elt2.value==number){
                    felicitation();
                }


            })
            
            
        }
        else if(text=="Intermediaire"){

            alert("vous avez 10 tentatives!");
            t=10;
            document.body.style.cssText="background-image:url(https://th.bing.com/th/id/R.22f230799b3dde56bc4c4ece818f73eb?rik=b1ioU%2f8vrXGlzw&pid=ImgRaw&r=0)";
            document.body.innerHTML = 
            `

            <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h3 class="text-center mb-4">Devinez le chiffre!</h3>
                                <div class="mb-3 w-75">
                                    <label for="exampleInput" class="form-label">Entrez un nombre</label>
                                    <input type="number" class="saisie form-control" id="exampleInput" placeholder="Saisissez un nombre" required>
                                </div>
                                <button type="submit" class="submit btn btn-outline-success w-75">Soumettre</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="ligne down bg-warning p-2 text-dark bg-opacity-50 text-center">Le niveau Intermediaire a été sélectionné. Devinez le chiffre entre 0 et 50! </div>


        `;
            let elt2=document.querySelector(".saisie");
            let elt3=document.querySelector(".submit");
            elt2.addEventListener("keydown", function(e) {
                if (e.key === "Enter") {  
                    elt3.click(); 
                }
            });
            let number=Math.floor(Math.random()*51);
            console.log(number);
            
            elt3.addEventListener("click",function(e){
                if(elt2.value!=number){
                    t=t-1;
                    let child=document.body.querySelector(".ligne");
                    child.classList.replace("bg-warning", "bg-danger");
                    console.log("child="+child.innerHTML);
                    child.innerHTML=`Vous avez mal deviné. Il vous reste ${t} tentatives!`;
                    console.log("child="+child.innerHTML);
                    setTimeout(() => {
                        let rep = confirm("Voulez-vous continuer ?");                        
                        if (rep && t!=0) {

                            child.classList.replace( "bg-danger","bg-warning");

                            child.innerHTML = "Réessayez avec un nouveau chiffre !";
                        } 
                        else if(rep && t==0){
                            test();
 
                         }
                        else {
                        location.reload();
                        }
                    }, 100); 

                
            









                }
                else if(+elt2.value==number){
                    felicitation();
                }


            })






        }
        else{
            alert("vous avez 5 tentatives!");
            t=5;
            document.body.style.cssText="background-image:url(https://img.freepik.com/free-vector/red-watercolor-background_1378-184.jpg)";
            document.body.innerHTML = 
            `

            <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h3 class="text-center mb-4">Devinez le chiffre!</h3>
                                <div class="mb-3 w-75">
                                    <label for="exampleInput" class="form-label">Entrez un nombre</label>
                                    <input type="number" class="saisie form-control" id="exampleInput" placeholder="Saisissez un nombre" required>
                                </div>
                                <button type="submit" class="submit btn btn-outline-success w-75">Soumettre</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="ligne down bg-dark p-2 text-dark bg-opacity-50 text-center">Le niveau Difficile a été sélectionné. Devinez le chiffre entre 0 et 100! </div>


        `;
            let elt2=document.querySelector(".saisie");
            let elt3=document.querySelector(".submit");
            elt2.addEventListener("keydown", function(e) {
                if (e.key === "Enter") {  
                    elt3.click(); 
                }
            });
            let number=Math.floor(Math.random()*101);
            console.log(+elt2.value);
            console.log(number);
            
            elt3.addEventListener("click",function(e){
                if(elt2.value!=number){
                    t=t-1;
                    let child=document.body.querySelector(".ligne");
                    child.classList.replace("bg-dark", "bg-danger");
                    console.log("child="+child.innerHTML);
                    child.innerHTML=`Vous avez mal deviné. Il vous reste ${t} tentatives!`;
                    console.log("child="+child.innerHTML);
                    setTimeout(() => {
                        let rep = confirm("Voulez-vous continuer ?");
                        if (rep && t!=0) {
                            child.classList.replace( "bg-danger","bg-dark");

                            child.innerHTML = "Réessayez avec un nouveau chiffre !";
                        }
                        else if(rep && t==0){
                           test();

                        }
                         else {
                        location.reload();
                        }
                    }, 100); 

                
            









                }
                else if(+elt2.value==number){
                    felicitation();
                }


            })

            
        }
            
    }


   

))
function test(){
    document.body.innerHTML+=`<button class="reessayer btn btn-outline-dark">Réessayer</button>`
    let elt4=document.querySelector(".reessayer");
    elt4.addEventListener("click",function(e){
        location.reload();
    })}
function felicitation(){
    document.body.innerHTML='';
    document.body.style.cssText=`background-image:URL(https://th.bing.com/th/id/R.98501109e345a5e401ded04cd14d394a?rik=4UQhdaN1XoDdAg&pid=ImgRaw&r=0)`;
    setTimeout(()=>{
        document.body.innerHTML+=`<button class="rejouer btn btn-outline-dark">rejouer</button>`;
        let elt4=document.querySelector(".rejouer");
        elt4.addEventListener("click",function(e){
            location.reload();},100);
    
    })
}