



const generator = function () {
    divComputer = $(this).closest(".computer")
    divProcessor = $(this).closest(".processor")
    divBus = divComputer.find("p.BUS")
    console.log(`Processor ID: ${divProcessor.attr("id")}`)
    console.log(`Computer’s data-id: ${divComputer.attr("data-id")}`)
    console.log(`BUS: ${divBus[0].innerText}`)





}


$(".generator").on("click", generator); 