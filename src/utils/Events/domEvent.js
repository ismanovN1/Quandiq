export const HideShow = (setState) => {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        setState("YOPISH")
    } else {
        x.style.display = "none";
        setState('O\'QISH')
    }
}