// changing the color off all nav-items

const navItems = document.getElementsByTagName("a");
// console.log(navItems);

for(let i = 0 ; i < navItems.length ; i++){
    // navItems[i].style.backgroundColor = "#fff";
    navItems[i].style.color = "yellow";
    navItems[i].style.border = "1px solid yellow";
    navItems[i].style.padding = "4px"
    navItems[i].style.fontWeight = "bold";
    navItems[i].style.borderRadius = "5px"
}

