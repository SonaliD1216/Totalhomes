let currentService = [];
function addToService(cook) {
    const addToServiceList = document.getElementById("orderList");

    const currentService = document.createElement("div");
  currentService.className = "cook";

   currentService.appendChild(cook);

    currentService.push({ cook});
}

function placeOrder() {
    if (currentService.length === 0) {
        alert("Your booking is empty!");
        return;
    }

    alert("booking placed successfully!");

    // Clear the order
    document.getElementById("serviceList").innerHTML = "";
    currentService = [];
}

