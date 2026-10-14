let excited = false;

function exciteElectron() {

    const electron =
        document.getElementById("outerElectron");

    if(!excited){

        electron.style.top = "-40px";
        electron.style.background = "lime";

        document.getElementById("stateText").innerHTML =
        "<strong>Excited State:</strong> 1s² 2s² 2p⁶ 3p¹";

        excited = true;

    } else {

        electron.style.top = "-8px";
        electron.style.background = "yellow";

        document.getElementById("stateText").innerHTML =
        "<strong>Ground State:</strong> 1s² 2s² 2p⁶ 3s¹";

        excited = false;
    }
}