const hamburgerMenu = document.getElementById("hamburgerMenu"),
navBar = document.getElementById("navBar"),
socialSites = document.getElementById('socialSites'),
links = document.getElementById('links');

hamburgerMenu.addEventListener('click',toToggle)


function toToggle(e){
    
    if(window.getComputedStyle(navBar).getPropertyValue('position')==="absolute"){
    
    navBar.style.marginTop = '40px';
    navBar.style.position = "static";
    navBar.style.height = 'auto';
    navBar.style.backgroundColor = "rgba(0,0,0,0)";
    
    links.style.visibility = 'hidden';
    socialSites.style.visibility = 'hidden';

    hamburgerMenu.children.item(0).setAttribute('src','./images/icon-hamburger.svg');


        return;
    
    
    }
    navBar.style.marginTop = '0';
    navBar.style.position = "absolute";
    navBar.style.left = '0';
    navBar.style.top = '0';
    navBar.style.height = '100vh';
    navBar.style.backgroundColor = "rgba(20,30,254,0.7)";
    navBar.style.zIndex = '10';

    links.style.visibility = 'visible';
    socialSites.style.visibility = 'visible';

    hamburgerMenu.children.item(0).setAttribute('src','./images/icon-close.svg');

}


//form validation

const email = document.getElementById("email"),
submit = document.getElementById("submit");

email.addEventListener('change',validator);
submit.addEventListener("click",validator);

function validator(){
 
        let str = email.value;
        let validationStr = str.split('@')[1];
        
        let err = document.createElement('em');
            err.textContent = "Whoops, make sure it's an email";
            err.setAttribute('class',' text-white text-[.7em] py-[3px] px-[5px]');
            err.setAttribute('id','err');
        
        

        if(validationStr != 'email.com'){
            email.parentElement.style.border = '2px solid red';
            console.log(email.parentElement.children.length);
           if(email.parentElement.children.length > 2){
            return;
           }
            email.parentElement.appendChild(err);
        }
        else{
            email.parentElement.style.border = 'none';
            document.getElementById('err').remove();
        }
}
     

//functionality for the feature section tab

const tabs = document.getElementById('tabs'),
features = document.getElementById("features");


tabs.addEventListener("click",handleClickForTabs);

function handleClickForTabs(e){
    

switch (e.target.textContent){
    case 'Speedy Searching':
        helper(1);
        break;
    case  'Easy Sharing':
        helper(2);
        break;
    case 'Simple Bookmarking':
        helper(0);
        break;

    default:
        break;
}

function helper(elementCount){
    

    for(let i=0; i< features.childElementCount; i++){
        

        if(i == elementCount){
            features.children.item(i).setAttribute('class',' w-full text-center min-[751px]:text-left min-[751px]:flex min-[751px]:justify-start min-[751px]:items-center');
            tabs.children.item(i).style.borderBottom = '2px solid red';
            continue;
        }
        tabs.children.item(i).style.borderBottom = '1px solid rgb(203,213,225)';
        features.children.item(i).setAttribute('class','hidden');
    }
}

}