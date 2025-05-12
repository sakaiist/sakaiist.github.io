let block = document.createElement('pre');
if(!window.matchMedia("(hover:none)").matches) {
    block.innerHTML =
        `









        `;
} else {
    block.innerHTML =
        `


        `;
}
document.getElementsByTagName("main")[0].append(block);
