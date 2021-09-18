function main(){
    var p=Math.random();
        p=Math.floor(p*6)+1;

    var n=Math.random();
        n=Math.floor(n*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+p+".png");  
    document.querySelector(".img2").setAttribute("src","images/dice"+n+".png");   

    if(p>n){
        document.querySelector("h1").innerText="Player 1 Wins!";
    }else{
        if(p<n){
            document.querySelector("h1").innerText="Player 2 Wins!";
        }else{
            if(p===n){
                document.querySelector("h1").innerText="Draw";
            }
            
        }
    }
        
}
