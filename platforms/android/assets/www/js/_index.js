var lsObject = [];
var lsKey = 'giftr-spri0034';
var indexLoad = function () {
    if (window.location.href.indexOf("index.html") != -1) {
        var sPerson = document.getElementById("sPerson");
        var cPerson = document.getElementById("cPerson");
        var sPersonName = document.getElementById("sPersonName");
        var sPersonDate = document.getElementById("sPersonDate");
        var personDisplay = document.getElementById("personDisplay");
        var personModal = document.getElementById("personModal");
        //Click Listeners
        sPerson.addEventListener("click", sPersonFunc);
        cPerson.addEventListener("click", cPersonFunc);
    }
}();
var giftLoad = function () {
    document.location = "gifts.html";
    //    if (window.location.href.indexOf("gifts.html") != -1) {
    console.log("diddo");
    var sGift = document.getElementById("sGift");
    var cGift = document.getElementById("cGift");
    var rGift = document.getElementById("rGift");
    var sGiftName = document.getElementById("sGiftName");
    var sGiftStore = document.getElementById("sGiftStore");
    var sGiftUrl = document.getElementById("sGiftUrl");
    var sGiftCost = document.getElementById("sGiftCost");
    var giftModal = document.getElementById("giftModal");
    //Click Listeners
    sGift.addEventListener("click", sGiftFunc);
    cGift.addEventListener("click", cGiftFunc);
    rGift.addEventListener("click", rGiftFunc);
    console.log("ditto");
    //    }
}

function personDisplayFunc() {
    lsObject = JSON.parse(localStorage.getItem(lsKey));
    //    if (localStorage.getItem(lsKey)
    lsObject.forEach(function (item) {
        console.log(item.fullname);
        let li = document.createElement("li");
        li.className += "table-view-cell";
        let span = document.createElement("span");
        span.className += "name";
        let a = document.createElement("a");
        a.href = "#personModal";
        a.textContent = item.fullname;
        span.appendChild(a);
        li.appendChild(span);
        personDisplay.appendChild(li);
        let a2 = document.createElement("a");
        a2.className += "navigate-right pull-right";
        a2.textContent = item.date;
        //        a2.href = "gifts.html";
        a2.addEventListener("click", giftLoad);
        let span2 = document.createElement("span");
        span2.classList = +"dob";
        a2.appendChild(span2);
        li.appendChild(a2);
    })
}

function sPersonFunc() {
    lsObject.push({
        "id": new Date().getTime()
        , "fullname": sPersonName.value
        , "date": sPersonDate.value
        , "ideas": []
    });
    var jsonString = JSON.stringify(lsObject);
    localStorage.setItem(lsKey, jsonString);
    personDisplayFunc();
    personModal.classList = "modal";
}

function cPersonFunc() {
    personModal.classList = "modal";
}
var giftDisplayFunc = function () {};
var sGiftFunc = function () {
    console.log(lsObject);
    //lsObject = JSON.parse(localStorage.getItem(lsKey));
};
//        lsObject.push({
//        "id": new Date().getTime()
//        , "fullname": sPersonName.value
//        , "date": sPersonDate.value
//        , "ideas": []
//    });
//    var jsonString = JSON.stringify(lsObject);
//    localStorage.setItem(lsKey, jsonString);
//    personDisplayFunc();
//    personModal.classList = "modal";
var cGiftFunc = function () {
    giftModal.classList = "modal";
};

function rGiftFunc() {}