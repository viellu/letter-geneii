// ========================================
// RETREAT LETTER GENERATOR
// CASUAL TAGLISH
// ========================================


// ELEMENTS

const recipientName = document.getElementById("recipientName");
const relationship = document.getElementById("relationship");
const retreatName = document.getElementById("retreatName");
const appreciation = document.getElementById("appreciation");
const memory = document.getElementById("memory");
const encouragement = document.getElementById("encouragement");
const personalMessage = document.getElementById("personalMessage");
const senderName = document.getElementById("senderName");
const tone = document.getElementById("tone");
const length = document.getElementById("length");
const letterPreview = document.getElementById("letterPreview");


// ========================================
// RANDOM
// ========================================

function randomItem(array) {

    return array[
        Math.floor(Math.random() * array.length)
    ];
}


// ========================================
// OPENINGS
// ========================================

const openings = {

    heartfelt: [

        "Hii, di ko alam pano sisimulan 'to pero may gusto lang akong sabihin sayo.",

        "Hi! Di ako sanay magsulat ng ganito pero sige HAHAHA.",

        "Hii! Bihira lang ako magsabi ng ganito kaya basahin mo na lang nang maayos hahaha.",

        "Hi! Since retreat mo naman, magiging medyo serious muna ako saglit.",

        "Di ko talaga alam ano dapat intro dito so diretso na lang ako hahaha."
    ],


    friendly: [

        "Hii! Sana nag-eenjoy ka diyan hahaha.",

        "Hellooo, syempre kailangan may letter din ako para sayo.",

        "Hi! Eto na yung very special message ko sayo HAHAHA.",

        "Hii, sana okay ka diyan and di ka pa nauumay kakabasa ng letters hahaha.",

        "Hello! Di ko alam kung pang-ilang letter mo na 'to pero dagdagan pa natin."
    ],


    inspirational: [

        "Hii, konting serious message lang 'to, promise di naman sobrang dramatic.",

        "Hi! Di ako magaling magbigay ng life advice pero may gusto lang akong sabihin.",

        "Since retreat mo naman, may konting advice ako kahit di mo hinihingi HAHAHA.",

        "Hi! Serious muna saglit kasi may gusto talaga akong sabihin sayo.",

        "Hii, wag ka kabahan di naman 'to motivational speech hahaha."
    ],


    funny: [

        "Hello HAHAHA okay serious muna tayo for 2 minutes.",

        "Hi! Wag ka magulat kung medyo mabait ako sa letter na 'to.",

        "Hii! Screenshot mo 'to kasi bihira lang ako maging wholesome HAHAHA.",

        "Hello, eto na yung moment na kunwari serious at emotional ako.",

        "Hi! Wag ka muna tumawa, sinusubukan ko maging sincere dito HAHAHA."
    ],


    banter: [

        "Hoy HAHAHA since retreat mo ngayon, sige magiging mabait muna ako sayo saglit.",

        "Uy HAHAHA eto na letter mo, wag ka masyadong ma-touch ah.",

        "Hoyyy, di ako sanay gumawa ng ganito para sayo HAHAHA pero sige na nga.",

        "HAHAHAHA hoy eto na, gumawa talaga ako ng letter para sayo. Appreciate mo 'to.",

        "Uy wag ka mag-expect ng sobrang sweet dito HAHAHA kilala mo naman ako.",

        "Hoy, since retreat mo naman sige tigil muna bardagulan natin saglit HAHAHA.",

        "Eto na letter mo HAHAHA wag ka muna mang-asar, basahin mo muna.",

        "Uy HAHAHA di ko alam ano sasabihin ko dito pero sige bahala na.",

        "Hoyyy HAHAHA wag kang feeling special dahil ginawan kita neto.",

        "HAHAHAHA di talaga bagay sakin gumawa ng ganitong letter pero para sayo sige na nga."
    ]
};


// ========================================
// RELATIONSHIP MESSAGES
// ========================================

const relationshipMessages = {

    friend: [

        "Glad ako na naging friend kita.",

        "Di ko man lagi sabihin pero naa-appreciate talaga kita as a friend.",

        "Masaya ako na naging friends tayo, kahit minsan puro kalokohan lang hahaha.",

        "Thankful ako na nakilala kita and naging friend kita."
    ],


    "best friend": [

        "Salamat kasi lagi kang nandiyan kahit minsan puro kalokohan lang naman ginagawa natin HAHAHA.",

        "Di ko man lagi sabihin pero sobrang thankful ako na naging best friend kita.",

        "Ang dami na nating random na pinagdaanan and di ko ipagpapalit yun hahaha.",

        "Thank you sa pakikinig sa mga random kwento ko kahit minsan wala namang sense HAHAHA.",

        "Sobrang glad ako na naging close tayo kasi ang boring siguro kung wala akong kasama sa mga kalokohan natin."
    ],


    classmate: [

        "Glad ako na naging classmate kita kasi mas naging masaya yung school dahil sa mga random moments natin.",

        "Thank you sa mga tawanan at random moments natin sa school hahaha.",

        "Di ko inexpect na magiging close tayo pero glad ako na nangyari.",

        "Isa ka talaga sa mga dahilan kung bakit mas bearable yung school HAHAHA."
    ],


    sibling: [

        "Kahit nakakainis ka minsan, love pa rin kita syempre HAHAHA.",

        "Di naman tayo mahilig maging sweet pero alam mo naman nandito lang ako.",

        "Kahit lagi tayong nag-aasaran, support pa rin kita.",

        "Di ko man sabihin lagi pero proud ako sayo."
    ],


    cousin: [

        "Glad ako na hindi lang tayo magpinsan pero nakakakulitan din kita.",

        "Thankful ako sa mga random family moments natin hahaha.",

        "Masaya ako na marami tayong memories together.",

        "At least may kakampi ako sa mga family gathering HAHAHA."
    ],


    child: [

        "Proud ako sayo kahit di ko man palaging nasasabi.",

        "Always remember na nandito lang ako para sayo.",

        "Ang bilis mong lumaki hahaha, pero sobrang proud ako sayo.",

        "Whatever happens, support lang ako sayo."
    ],


    partner: [

        "Thank you kasi nandiyan ka lagi and for putting up with me hahaha.",

        "Di man ako palaging sweet pero sobrang naa-appreciate kita.",

        "Masaya ako na ikaw yung kasama ko sa mga random na bagay.",

        "Thank you sa lahat ng little things na ginagawa mo."
    ],


    other: [

        "Glad ako na nakilala kita.",

        "Di ko man lagi sabihin pero naa-appreciate kita.",

        "Thankful ako na naging part ka ng life ko.",

        "I'm glad na naging close tayo."
    ]
};


// ========================================
// CASUAL EXTRA MESSAGES
// ========================================

const casualExtras = [

    "Anyway, ayoko naman gawing sobrang dramatic 'to hahaha.",

    "Di ko naman hahabaan masyado kasi baka maumay ka sakin HAHAHA.",

    "Pero ayun, gusto ko lang talaga malaman mo yun.",

    "Corny man pakinggan pero totoo naman hahaha.",

    "Basta gets mo na siguro point ko HAHAHA.",

    "Di ko na ie-explain nang sobra, alam mo na yun hahaha."
];


// ========================================
// LONGER THOUGHTS
// ========================================

const longerMessages = [

    `Alam ko naman na hindi laging okay lahat. May times talaga na nakakapagod or di mo alam kung tama ba ginagawa mo. Pero okay lang yun. Di naman kailangan figured out agad lahat.`,

    `If ever dumating yung time na parang di mo alam gagawin mo, chill ka lang. One thing at a time. Di naman kailangan madaliin lahat.`,

    `Marami ka pang magagawa and marami ka pang mae-experience. Kaya wag ka masyadong ma-pressure kung hindi pa lahat nangyayari the way you want it to.`,

    `May mga bagay talagang di natin kontrolado. Basta gawin mo lang kung ano yung kaya mo and wag mo rin kalimutan mag-enjoy.`,

    `Di naman kailangan laging productive or perfect. Minsan okay lang mapagod, magpahinga, tapos try ulit.`,

    `Wag mo masyadong isipin kung nauuna yung ibang tao sayo. May sarili ka namang pace, so chill ka lang and gawin mo kung ano tingin mong tama para sayo.`
];


// ========================================
// CLOSINGS
// ========================================

const closings = {

    heartfelt: [

        "Basta nandito lang ako if kailangan mo ng kausap or kahit kasama lang sa random na bagay.",

        "Di ko man sabihin palagi pero support lang ako sayo.",

        "Ayun lang naman. Sana alam mo na naa-appreciate talaga kita.",

        "Basta tandaan mo lang na nandito lang ako para sayo."
    ],


    friendly: [

        "Ayun lang HAHAHA enjoy mo diyan!",

        "Sige tama na drama hahaha. Enjoy your retreat!",

        "Basta enjoy ka lang diyan and wag masyadong stress.",

        "Ayun lang, balik na ulit tayo sa normal after ng retreat mo HAHAHA."
    ],


    inspirational: [

        "Basta wag mong masyadong i-pressure sarili mo. May sarili kang pace.",

        "One step at a time lang. Makakarating ka rin kung saan mo gusto.",

        "Basta gawin mo lang best mo. Di naman kailangan perfect.",

        "Trust yourself a little more. Kaya mo naman yan."
    ],


    funny: [

        "Okay tama na pagiging wholesome ko HAHAHA.",

        "Sige enough na, baka isipin mo nagbago na ako HAHAHA.",

        "Ayun lang. Wag mo 'to gamitin against me pagbalik mo HAHAHA.",

        "Okay balik na ako sa pagiging annoying after nito HAHAHA."
    ],


    banter: [

        "Ayun lang HAHAHA basta alam mo naman nandito lang ako lagi. Wag ka lang masyadong feeling.",

        "Sige na tama na pagiging sweet ko HAHAHA. Enjoy mo retreat mo, balik bardagulan tayo pagbalik mo.",

        "Basta alam mo na yun HAHAHA di ko na kailangan maging dramatic. Ingat ka palagi.",

        "Ayun lang naman HAHAHA. Wag mo ko aasarin dahil dito pagbalik mo ah.",

        "Sige enjoy ka muna diyan HAHAHA. Pagbalik mo balik na tayo sa normal na pang-aasar.",

        "Okay tama na HAHAHA baka isipin mo mabait talaga ako. Basta nandito lang ako lagi.",

        "Ayun lang pre HAHAHA wag ka maiyak diyan. Ingat ka lagi.",

        "Sige na enough na yung wholesome moment HAHAHA. Alam mo naman support kita lagi.",

        "Okay tapos na HAHAHA wag mo na ipakita sakin 'to ulit nakakahiya.",

        "Basta gets mo na yun HAHAHA. Di na kailangan pahabain. Enjoy ka diyan!"
    ]
};


// ========================================
// ESCAPE HTML
// ========================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ========================================
// GENERATE LETTER
// ========================================

function generateLetter() {

    const name = recipientName.value.trim();


    if (!name) {

        alert("Lagyan mo muna ng name 😭");

        recipientName.focus();

        return;
    }


    const sender =
        senderName.value.trim() || "Anonymous";


    const event =
        retreatName.value.trim();


    const selectedTone =
        tone.value;


    const selectedLength =
        length.value;


    const selectedRelationship =
        relationship.value;


    // ========================================
    // GREETING + OPENING
    // ========================================

    let letter = `
        <p>
            <strong>Dear ${escapeHTML(name)},</strong>
        </p>

        <p>
            ${randomItem(openings[selectedTone])}
            ${randomItem(
                relationshipMessages[selectedRelationship]
            )}
        </p>
    `;


    // ========================================
    // APPRECIATION
    // ========================================

    if (appreciation.value.trim()) {

        if (selectedTone === "banter") {

            letter += `
                <p>
                    Pero real talk saglit,
                    naa-appreciate ko talaga
                    ${escapeHTML(appreciation.value.trim())}.
                    Di ko lang lagi sinasabi kasi baka
                    lumaki ulo mo HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Gusto ko lang sabihin na naa-appreciate
                    ko talaga
                    ${escapeHTML(appreciation.value.trim())}.
                    Di ko man 'to lagi nasasabi,
                    napapansin ko naman yun hahaha.
                </p>
            `;
        }
    }


    // ========================================
    // MEMORY
    // ========================================

    if (memory.value.trim()) {

        if (selectedTone === "banter") {

            letter += `
                <p>
                    Tapos syempre di ko makakalimutan
                    ${escapeHTML(memory.value.trim())}.
                    Ang dami na rin pala nating
                    kalokohan pag inisip HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Tapos syempre di ko makakalimutan
                    ${escapeHTML(memory.value.trim())}.
                    Random man yun or hindi,
                    masaya akong nangyari yun hahaha.
                </p>
            `;
        }
    }


    // ========================================
    // MEDIUM / LONG EXTRA
    // ========================================

    if (
        selectedLength === "medium" ||
        selectedLength === "long"
    ) {

        letter += `
            <p>
                ${randomItem(casualExtras)}
                ${randomItem(longerMessages)}
            </p>
        `;
    }


    // ========================================
    // ENCOURAGEMENT
    // ========================================

    if (encouragement.value.trim()) {

        if (selectedTone === "banter") {

            letter += `
                <p>
                    Pero seryoso,
                    ${escapeHTML(encouragement.value.trim())}.
                    Wag kang matigas ulo HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Also,
                    ${escapeHTML(encouragement.value.trim())}.
                    Basta wag kang susuko agad ha.
                </p>
            `;
        }
    }


    // ========================================
    // LONG EXTRA
    // ========================================

    if (selectedLength === "long") {

        letter += `
            <p>
                ${randomItem(longerMessages)}
            </p>
        `;
    }


    // ========================================
    // PERSONAL MESSAGE
    // ========================================

    if (personalMessage.value.trim()) {

        if (selectedTone === "banter") {

            letter += `
                <p>
                    Eto seryoso talaga:
                    <strong>
                        ${escapeHTML(personalMessage.value.trim())}
                    </strong>
                    Wag ka ma-touch masyado HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Eto talaga gusto kong tandaan mo:
                    <strong>
                        ${escapeHTML(personalMessage.value.trim())}
                    </strong>
                </p>
            `;
        }
    }


    // ========================================
    // REQUIRED MESSAGE
    // ALWAYS INCLUDED
    // ========================================

    if (selectedTone === "banter") {

        letter += `
            <p>
                <strong>
                    Keep on going sa mga gusto mong gawin.
                </strong>

                Alam mo naman support kita kahit
                lagi kitang inaasar HAHAHA.

                Wag ka masyadong ma-pressure
                sa mga bagay-bagay.

                Gawin mo lang kung ano gusto mo
                and enjoy mo lang.
            </p>
        `;

    } else {

        letter += `
            <p>
                <strong>
                    Keep on going sa mga gusto mong gawin.
                </strong>

                Enjoy mo lang and wag mo
                masyadong i-pressure sarili mo.

                Basta do your best and
                believe in yourself.
            </p>
        `;
    }


    // ========================================
    // RETREAT
    // ========================================

    if (event) {

        letter += `
            <p>
                Enjoy mo lang yung
                <strong>
                    ${escapeHTML(event)}
                </strong>.

                Sana marami kang magandang
                memories na maiuwi after.
            </p>
        `;

    } else {

        letter += `
            <p>
                Enjoy mo lang yung retreat mo.
                Sana marami kang magandang
                memories na maiuwi after.
            </p>
        `;
    }


    // ========================================
    // CLOSING
    // ========================================

    letter += `
        <p>
            ${randomItem(closings[selectedTone])}
        </p>

        <p>
            Ingat palagi ❤️
            <br><br>

            - <strong>
                ${escapeHTML(sender)}
            </strong>
        </p>
    `;


    letterPreview.innerHTML = letter;
}


// ========================================
// COPY
// ========================================

async function copyLetter() {

    const text =
        letterPreview.innerText.trim();


    if (
        !text ||
        letterPreview.querySelector(
            ".placeholder-text"
        )
    ) {

        alert("Generate ka muna ng letter 😭");

        return;
    }


    try {

        await navigator.clipboard.writeText(text);

        showToast("Copied na!");

    } catch (error) {

        alert(
            "Di ma-copy automatically. Copy mo na lang manually."
        );
    }
}


// ========================================
// TOAST
// ========================================

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2000);
}


// ========================================
// CLEAR
// ========================================

function clearForm() {

    recipientName.value = "";

    relationship.value = "friend";

    retreatName.value = "";

    appreciation.value = "";

    memory.value = "";

    encouragement.value = "";

    personalMessage.value = "";

    senderName.value = "";

    tone.value = "heartfelt";

    length.value = "medium";


    letterPreview.innerHTML = `
        <p class="placeholder-text">
            Dito lalabas yung letter mo 👀
        </p>
    `;
}


// ========================================
// PRINT
// ========================================

function printLetter() {

    if (
        letterPreview.querySelector(
            ".placeholder-text"
        )
    ) {

        alert(
            "Generate ka muna ng letter 😭"
        );

        return;
    }


    const printWindow =
        window.open(
            "",
            "_blank"
        );


    printWindow.document.write(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Retreat Letter
            </title>

            <style>

                body {

                    font-family:
                        Georgia,
                        "Times New Roman",
                        serif;

                    max-width: 750px;

                    margin: 60px auto;

                    padding: 30px;

                    line-height: 1.8;

                    font-size: 17px;

                    color: #222;
                }


                p {
                    margin-bottom: 22px;
                }

            </style>

        </head>


        <body>

            ${letterPreview.innerHTML}

        </body>

        </html>
    `);


    printWindow.document.close();

    printWindow.focus();


    setTimeout(() => {

        printWindow.print();

    }, 300);
}


// ========================================
// BUTTONS
// ========================================

document
    .getElementById("generateBtn")
    .addEventListener(
        "click",
        generateLetter
    );


document
    .getElementById("regenerateBtn")
    .addEventListener(
        "click",
        generateLetter
    );


document
    .getElementById("copyBtn")
    .addEventListener(
        "click",
        copyLetter
    );


document
    .getElementById("clearBtn")
    .addEventListener(
        "click",
        clearForm
    );


document
    .getElementById("printBtn")
    .addEventListener(
        "click",
        printLetter
    );