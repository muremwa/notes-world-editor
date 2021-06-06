/* 
    Swith tabs around
*/

let activeLink; // hold the active link


// change up class names
function tabSwitch (newTabId, newActiveL) {
    const ct = document.getElementById(activeLink.dataset.sectionTo);
    const nt = document.getElementById(newTabId);

    if (ct && nt) {
        ct.classList.remove('editor-tab-active');
        nt.classList.add('editor-tab-active');

        if (activeLink && newActiveL) {
            activeLink.classList.remove('active');
            newActiveL.classList.add('active');
            activeLink = newActiveL;
        };
    };
};


const tabLinks = [...document.getElementsByClassName('tab-nav')];
activeLink = tabLinks.find((link) => link.classList.contains('active'));

tabLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const cLink = e.target;
        const repTab = cLink.dataset.sectionTo;
        tabSwitch(repTab, cLink);
    });
})