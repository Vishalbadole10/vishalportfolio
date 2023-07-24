console.log("hello");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburg').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
       
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline';
    },400 );
}
    })
    
            function startTyping() {
                var typed = new Typed(".typed-text", {
                    strings: ["Vishal Badole.", "Coder.", "Web developer."],
                    typeSpeed: 200,
                    backSpeed: 200,
                    loop: true
                });
            }
    
            // Start the typing animation when the page is loaded
            document.addEventListener("DOMContentLoaded", startTyping);
        
