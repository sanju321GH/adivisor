let x;
let adviceText = document.getElementById("advtext");
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dice").onclick = function(){
        var x = Math.floor(Math.random() * 15);

        if( x == 1){
            document.getElementById("advtxt").innerHTML = '"Help others."';
            document.getElementById("advno").innerHTML = "2"
        }
        else if(x == 2){
            document.getElementById("advtxt").innerHTML = '"Dont even try to think about quitting."';
            document.getElementById("advno").innerHTML = "138"
        }
        else if(x == 3){
            document.getElementById("advtxt").innerHTML = '"If you feel like not working, think about a situation where your mother takes a holiday.. Very bad right."';
            document.getElementById("advno").innerHTML = "487"
        }
        else if(x == 4){
            document.getElementById("advtxt").innerHTML = '"I dont know what your going through but dont ever think about smoking or drinking."';
            document.getElementById("advno").innerHTML = "278"
        }
        else if(x == 5){
            document.getElementById("advtxt").innerHTML = '"if you feel like giving up remember why you started."';
            document.getElementById("advno").innerHTML = "239"
        }
        else if(x == 6){
            document.getElementById("advtxt").innerHTML = '"Your mom gave birth to a worrior who will achieve great things not to one who cries over problems which are not even real."';
            document.getElementById("advno").innerHTML = "69"
        }
        else if(x == 7){
            document.getElementById("advtxt").innerHTML = '"if your plan to reach your goal didnt succeed change the plan not the goal"';
            document.getElementById("advno").innerHTML = "138"
        }
        else if(x == 8){
            document.getElementById("advtxt").innerHTML = '"If your previewing my site right now i can predict that you want to change your life. otherwise why would you be here in the first place. Keep up brother."';
            document.getElementById("advno").innerHTML = "143"
        }
        else if(x == 9){
            document.getElementById("advtxt").innerHTML = '"........hey dont move your eyes i am taking selfie of you and me.. do you know why.. beacause i cant take one after you become famous."';
            document.getElementById("advno").innerHTML = "689"
        }
        else if(x == 10){
            document.getElementById("advtxt").innerHTML = '"If you facing problems right now. Remember life wants to make you strong before it makes you happy."';
            document.getElementById("advno").innerHTML = "022"
        }
        else if(x == 11){
            document.getElementById("advtxt").innerHTML = '"life and problems are like tom and jerry they fight a lot with each other but cant live with out each other."';
            document.getElementById("advno").innerHTML = "84"
        }
        else if(x == 12){
            document.getElementById("advtxt").innerHTML = '"Our journey has started with a competetion. with out competition life is nothing but dead meant."';
            document.getElementById("advno").innerHTML = "28"
        }
        else if(x == 13){
            document.getElementById("advtxt").innerHTML = '"Do you know whats the best thing in life, calling to my mom and say"Mom..i acheived it"."';
            document.getElementById("advno").innerHTML = "8"
        }
        else if(x == 14){
            document.getElementById("advtxt").innerHTML = '"Losing motivation? Now the real game begins."';
            document.getElementById("advno").innerHTML = "983"
        }
        else{}
    };
});