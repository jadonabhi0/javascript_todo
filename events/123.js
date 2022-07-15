console.log("Hare Krishna");

// object event

const buttonone = document.querySelector("#one");
buttonone.addEventListener("click", function(eventObject){console.log(eventObject)})

// how it is happening

// browser ===> js Engine + webApis
// jab bhe kisi  element par event listener add hoga or jab browser ko pta chalega ki event listen hua hai
// tab webApis callback function ke saath kuch extra information bhe degi browser ko use event object bolte hain
// pr ye information hme object ki form main mileage
