document.documentElement.style.setProperty('--animate-duration', '.5s');
document.querySelectorAll('.button')
// varible mai hold karna hia 
const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body')
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('mouseover', function(e) {
        // console.log(e);
        // console.log(e.target);
        // if condition se bhi kar skate hian 
        button.addEventListener('mouseout',function(out) {
            body.style.backgroundColor = '#ffff'
            body.style.backgroundImage = "none";
        })
        
        if (e.target.id === 'purple' ) {
            body.style.backgroundColor = '#AD49E1'
            body.style.backgroundImage = "url('images/purple.png')"
            body.style.backgroundSize = "cantain";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
        }
        else if (e.target.id === 'orange' ) {
            body.style.backgroundColor = '#EB5B00'
            body.style.backgroundImage = "url('images/orange1.png')"
            body.style.backgroundSize = "cantain";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
        }
        else if (e.target.id === 'green' ) {
            body.style.backgroundColor = '#8EAC50'
            body.style.backgroundImage = "url('images/green.png')"
            body.style.backgroundSize = "cantain";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
        }
        else if (e.target.id === 'yellow' ) {
            body.style.backgroundColor = '#FFB200'
    
            body.style.backgroundImage = "url('images/Yellow.png')"
            body.style.backgroundSize = "cantain";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
        }
        else if (e.target.id === 'dark-Pink' ) {
            body.style.backgroundColor = '#FF4545'
            body.style.backgroundImage = "url('images/red.png')"
            body.style.backgroundSize = "cantain";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
        } 
        else if (e.target.id === 'lemon' ) {
            body.style.backgroundColor = '#F8E559'
            body.style.backgroundImage = "url('images/lemon1.png')"
            body.style.backgroundSize = "cantain";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
        
            
        }else {
    body.style.backgroundColor = '#ffff'
        };
        // let color = e.target.id;
        // switch (color) {
        //     case 'purple':
        //         body.style.backgroundColor = '#AD49E1'
        //         break;
        //     case 'orange':
        //         body.style.backgroundColor = '#EB5B00'
        //         break;
        //     case 'green':
        //         body.style.backgroundColor = '#8EAC50'
        //         break;
        //     case 'yellow':
        //         body.style.backgroundColor = '#FFB200'
        //         break;
        //     case 'dark-Pink':
        //         body.style.backgroundColor = '#FF4545'
        //         break;
        
        //     default:
        //         body.style.backgroundColor = '#FFF';
        // }
        
    })
}); 

