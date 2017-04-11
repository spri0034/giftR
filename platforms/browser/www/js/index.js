var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }, // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    }, // Update DOM on a Received Event
    receivedEvent: function (id) {
        var lsObject = [];
        var lsKey = 'giftr-spri0034';
        var personKey = 'giftr-spri0034-person';
        var INIT = {
            indexInit: function () {
                if (localStorage.getItem(lsKey) !== null) {
                    var sPerson = document.getElementById("sPerson");
                    var cPerson = document.getElementById("cPerson");
                    var sPersonName = document.getElementById("sPersonName");
                    var sPersonDate = document.getElementById("sPersonDate");
                    var personDisplay = document.getElementById("personDisplay");
                    var personModal = document.getElementById("personModal");
                    sPerson.addEventListener("touchstart", INIT.sPersonFunc);
                    cPerson.addEventListener("touchstart", INIT.cPersonFunc);
                    INIT.personDisplayFunc();
                }
                else {
                    var sPerson = document.getElementById("sPerson");
                    var cPerson = document.getElementById("cPerson");
                    var sPersonName = document.getElementById("sPersonName");
                    var sPersonDate = document.getElementById("sPersonDate");
                    var personDisplay = document.getElementById("personDisplay");
                    var personModal = document.getElementById("personModal");
                    sPerson.addEventListener("touchstart", INIT.sPersonFunc);
                    cPerson.addEventListener("touchstart", INIT.cPersonFunc);
                }
            }
            , sPersonFunc: function () {
                lsObject.push({
                    "id": new Date().getTime()
                    , "fullname": sPersonName.value
                    , "date": sPersonDate.value
                    , "ideas": []
                });
                var jsonString = JSON.stringify(lsObject);
                localStorage.setItem(lsKey, jsonString);
                personModal.classList = "modal";
                INIT.personDisplayFunc();
            }
            , personDisplayFunc: function () {
                while (personDisplay.firstChild) {
                    personDisplay.removeChild(personDisplay.firstChild);
                }
                lsObject = JSON.parse(localStorage.getItem(lsKey));
                //    if (localStorage.getItem(lsKey)
                lsObject.sort(function (date1, date2) {
                    if (date1.id > date2.id) return 1;
                    if (date1.id < date2.id) return -1;
                    return 0;
                });
                lsObject.forEach(function (item) {
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
                    a2.className += "data-id=" + '"' + item.id + '" ';
                    a2.className += "navigate-right pull-right";
                    a2.addEventListener("touchstart", function () {
                        localStorage.setItem(personKey, item.fullname);
                        document.location = "gifts.html";
                    });
                    a2.textContent = item.date;
                    let span2 = document.createElement("span");
                    span2.classList = +"dob";
                    a2.appendChild(span2);
                    li.appendChild(a2);
                })
            }
            , cPersonFunc: function () {
                personModal.classList = "modal";
            }
            , giftInit: function (name) {
                var sGift = document.getElementById("sGift");
                var cGift = document.getElementById("cGift");
                var rGift = document.getElementById("rGift");
                var sGiftName = document.getElementById("sGiftName");
                var sGiftStore = document.getElementById("sGiftStore");
                var sGiftUrl = document.getElementById("sGiftUrl");
                var sGiftCost = document.getElementById("sGiftCost");
                var giftModal = document.getElementById("giftModal");
                var personTitle = document.getElementById("personTitle");
                var giftlist = document.getElementById("gift-list");
                var btnBack = document.getElementById("btnBack");
                btnBack.addEventListener("touchstart", function () {
                    document.location = "index.html";
                });
                sGift.addEventListener("touchstart", function () {
                    lsObject = JSON.parse(localStorage.getItem(lsKey));
                    var sGiftName = document.getElementById("sGiftName");
                    var sGiftStore = document.getElementById("sGiftStore");
                    var sGiftUrl = document.getElementById("sGiftUrl");
                    var sGiftCost = document.getElementById("sGiftCost");
                    for (let i = 0; i <= lsObject.length; i++) {
                        if (lsObject[i].fullname == localStorage.getItem(personKey)) {
                            console.log("Found: " + localStorage.getItem(personKey))
                            lsObject[i].ideas.push({
                                "giftId": new Date().getTime()
                                , "idea": sGiftName.value
                                , "at": sGiftStore.value
                                , "cost": sGiftCost.value
                                , "url": sGiftUrl.value
                            })
                            let jsString = JSON.stringify(lsObject);
                            localStorage.setItem(lsKey, jsString);
                        }
                        giftModal.classList = "modal";
                        INIT.giftDisplayFunc();
                    }
                });
                cGift.addEventListener("touchstart", function () {
                    giftModal.classList = "modal";
                });
                personTitle.innerHTML = name + " Gift Ideas";
                INIT.giftDisplayFunc();
                //        rGift.addEventListener("click", INIT.rGiftFunc);
            }
            , giftDisplayFunc: function () {
                    var giftlist = document.getElementById("gift-list");
                    while (giftlist.firstChild) {
                        giftlist.removeChild(giftlist.firstChild);
                    }
                    lsObject = JSON.parse(localStorage.getItem(lsKey));
                    let b = 0;
                    lsObject.forEach(function (item) {
                        for (let counter = 0; counter < lsObject[b].ideas.length; counter++) {
                            console.log(counter);
                            console.log(lsObject);
                            console.log(lsObject[b].ideas.length);
                            if (lsObject[b].fullname == localStorage.getItem(personKey)) {
                                let x = b;
                                let y = counter;
                                let li = document.createElement("li");
                                li.className += "tab    le-view-cell";
                                let span = document.createElement("span");
                                span.className = "icon icon-trash pull-right midline";
                                span.addEventListener("touchstart", function () {
                                    lsObject[x].ideas.splice(y, 1);
                                    let jsString = JSON.stringify(lsObject);
                                    localStorage.setItem(lsKey, jsString);
                                    INIT.giftDisplayFunc();
                                })
                                let h4 = document.createElement("h4");
                                h4.textContent = lsObject[b].ideas[counter].idea;
                                //                        li.appendChild(span);
                                li.appendChild(h4);
                                if (lsObject[b].ideas[counter].at !== "") {
                                    let p1 = document.createElement("p");
                                    p1.textContent = lsObject[b].ideas[counter].at;
                                    li.appendChild(p1);
                                }
                                if (lsObject[b].ideas[counter].url !== "") {
                                    let a = document.createElement("a");
                                    a.textContent = lsObject[b].ideas[counter].url;
                                    a.href = lsObject[b].ideas[counter].url;
                                    li.appendChild(a);
                                }
                                if (lsObject[b].ideas[counter].url !== "") {
                                    let p2 = document.createElement("p");
                                    p2.textContent = lsObject[b].ideas[counter].cost;
                                    li.appendChild(p2);
                                }
                                giftlist.appendChild(span);
                                giftlist.appendChild(li);
                            }
                        }
                        b++
                    })
                }
                //            
        }
        console.log(document.location.pathname);
        if (document.location.pathname == "/index.html") {
            console.log(document.location.pathname);
            INIT.indexInit();
        }
        else if (document.location.pathname == "/gifts.html") {
            INIT.giftInit(localStorage.getItem(personKey));
            console.log(localStorage.getItem(personKey));
        }
    }
};
app.initialize();