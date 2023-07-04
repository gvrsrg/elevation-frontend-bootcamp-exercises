



const generator = function () {
    divComputer = $(this).closest(".computer")
    divProcessor = $(this).closest(".processor")
    divBus = divComputer.find("p.BUS")
    console.log(`Processor ID: ${divProcessor.attr("id")}`)
    console.log(`Computer’s data-id: ${divComputer.attr("data-id")}`)
    console.log(`BUS: ${divBus[0].innerText}`)

}

const validator = function () {
    divComputer = $(this).closest(".computer")
    divProcessor = divComputer.find(".processor")
    buttonGenerator = divComputer.find("button.generator")
    pMB = divComputer.find("p.MB")
    spanQR = divProcessor.find(".QR")
    divBus = divComputer.find("p.BUS")
    let textQR = ""
    for (let QR of spanQR) {
        textQR += QR.innerText +", "
    }
    textQR = textQR.slice(0, -2);
    console.log(`The generator’s text: ${buttonGenerator[0].innerText}`)
    console.log(`MB: ${pMB[0].innerText}`)
    console.log(`QR: ${textQR}`)

}
// The generator’s text
// The MB
// Both QRs

$(".generator").on("click", generator); 
$(".validator").on("click", validator); 