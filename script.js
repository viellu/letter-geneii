// ========================================
// RETREAT LETTER GENERATOR FOR CHLOE
// ========================================


// ========================================
// GET ELEMENTS
// ========================================

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
// RANDOM HELPER
// ========================================

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// Pick two different items from the same array
function twoDifferentItems(array) {

    const first = randomItem(array);

    let second = randomItem(array);

    while (second === first && array.length > 1) {
        second = randomItem(array);
    }

    return [first, second];
}


// ========================================
// OPENINGS
// ========================================

const openings = {

    heartfelt: [
        "Hii, di ko alam pano sisimulan 'to pero may gusto lang akong sabihin sayo.",
        "Hi! Di ako sanay magsulat ng ganito pero sige hahaha.",
        "Hii, bihira lang ako magsabi ng ganito kaya basahin mo na lang nang maayos.",
        "Hi! Since retreat mo naman, magiging medyo serious muna ako saglit hahaha.",
        "Okay di ko talaga alam ano dapat intro dito, so diretso na lang ako."
    ],

    friendly: [
        "Hii! Sana nag-eenjoy ka diyan hahaha.",
        "Hellooo, syempre kailangan may letter din ako para sayo.",
        "Hi! Eto na yung very special message ko sayo HAHAHA.",
        "Hii, sana okay ka diyan and di ka pa nauumay kakabasa ng letters.",
        "Hello! Di ko alam kung pang-ilang letter mo na 'to pero dagdagan pa natin hahaha."
    ],

    inspirational: [
        "Hii, konting serious message lang 'to, promise di naman sobrang dramatic.",
        "Hi! Di ako magaling magbigay ng life advice pero may gusto lang akong sabihin.",
        "Since retreat mo naman, may konting advice ako kahit di mo hinihingi hahaha.",
        "Hi! Serious muna saglit kasi may gusto talaga akong sabihin sayo.",
        "Hii, wag ka kabahan, di naman 'to motivational speech HAHAHA."
    ],

    funny: [
        "Hello HAHAHA okay serious muna tayo for 2 minutes.",
        "Hi! Wag ka magulat kung medyo mabait ako sa letter na 'to hahaha.",
        "Hii! Screenshot mo 'to kasi bihira lang ako maging wholesome HAHAHA.",
        "Hello, eto na yung moment na kunwari serious at emotional ako hahaha.",
        "Hi! Wag ka muna tumawa, sinusubukan ko maging sincere dito HAHAHA."
    ],

    banter: [
        "Hoy HAHAHA since retreat mo ngayon, sige magiging mabait muna ako sayo saglit.",
        "Uy HAHAHA eto na letter mo, wag ka masyadong ma-touch ah.",
        "Hoyyy, di ako sanay gumawa ng ganito para sayo pero sige na nga HAHAHA.",
        "HAHAHAHA hoy eto na, gumawa talaga ako ng letter para sayo. Appreciate mo 'to.",
        "Uy wag ka mag-expect ng sobrang sweet dito HAHAHA kilala mo naman ako.",
        "Hoy, since retreat mo naman sige tigil muna bardagulan natin saglit hahaha.",
        "Eto na letter mo HAHAHA wag ka muna mang-asar, basahin mo muna.",
        "Uy HAHAHA di ko alam ano sasabihin ko dito pero sige bahala na.",
        "Hoyyy HAHAHA wag kang feeling special dahil ginawan kita neto.",
        "Di talaga bagay sakin gumawa ng ganitong letter pero para sayo sige na nga HAHAHA.",
        "Hoy basahin mo muna nang maayos bago ka mang-asar HAHAHA.",
        "Uy eto na HAHAHA minsan lang ako maging mabait sayo so sulitin mo na."
    ]
};


// ========================================
// RELATIONSHIP MESSAGES
// ========================================

const relationshipMessages = {

    friend: [
        "Glad ako na naging friend kita.",
        "Di ko man lagi sabihin pero naa-appreciate talaga kita as a friend.",
        "Masaya ako na naging friends tayo, kahit minsan puro kalokohan lang ginagawa natin hahaha.",
        "Thankful ako na nakilala kita and naging friend kita.",
        "Buti na lang naging friends tayo kasi at least may kasama ako sa mga random na trip hahaha."
    ],

    "best friend": [
        "Salamat kasi lagi kang nandiyan kahit minsan puro kalokohan lang naman ginagawa natin HAHAHA.",
        "Di ko man lagi sabihin pero sobrang thankful ako na naging best friend kita.",
        "Ang dami na nating random na pinagdaanan and di ko ipagpapalit yun hahaha.",
        "Thank you sa pakikinig sa mga random kwento ko kahit minsan wala namang sense.",
        "Buti na lang naging close tayo kasi sino pa ba guguluhin ko palagi HAHAHA.",
        "Alam mo naman na kahit lagi kitang inaasar, solid ka talaga sakin."
    ],

    classmate: [
        "Glad ako na naging classmate kita kasi mas naging masaya yung school dahil sa mga random moments natin.",
        "Thank you sa mga tawanan at random moments natin sa school hahaha.",
        "Di ko inexpect na magiging close tayo pero glad ako na nangyari.",
        "Isa ka talaga sa mga dahilan kung bakit mas bearable yung school HAHAHA.",
        "At least may kasama ako tumawa sa school kahit minsan dapat tahimik tayo hahaha."
    ],

    sibling: [
        "Kahit nakakainis ka minsan, love pa rin kita syempre HAHAHA.",
        "Di naman tayo mahilig maging sweet sa isa't isa pero alam mo naman nandito lang ako.",
        "Kahit lagi tayong nag-aasaran, syempre support pa rin kita.",
        "Di ko man sabihin lagi pero proud ako sayo.",
        "Kahit araw-araw mo kong iniinis, wala naman akong choice, kapatid kita HAHAHA."
    ],

    cousin: [
        "Glad ako na hindi lang tayo magpinsan pero nakakakulitan din kita.",
        "Thankful ako sa mga random family moments natin hahaha.",
        "Masaya ako na marami tayong memories together.",
        "At least may kakampi ako sa mga family gathering HAHAHA.",
        "Buti na lang ikaw pinsan ko kasi may kasama ako sa mga family event na minsan ang awkward hahaha."
    ],

    child: [
        "Proud ako sayo kahit di ko man palaging nasasabi.",
        "Always remember na nandito lang ako para sayo.",
        "Ang bilis mong lumaki hahaha, pero sobrang proud ako sayo.",
        "Whatever happens, support lang ako sayo.",
        "Kahit lumalaki ka na, nandito lang ako palagi pag kailangan mo ko."
    ],

    partner: [
        "Thank you kasi nandiyan ka lagi and for putting up with me hahaha.",
        "Di man ako palaging sweet pero sobrang naa-appreciate kita.",
        "Masaya ako na ikaw yung kasama ko sa mga random na bagay.",
        "Thank you sa lahat ng little things na ginagawa mo, napapansin ko yun kahit di ko lagi sinasabi.",
        "Alam mo naman na kahit inaasar kita palagi, mahal pa rin kita hahaha."
    ],

    babygirl: [
        "Syempre kailangan may letter din para sa babygirl ko HAHAHA.",
        "Di ko man lagi sabihin pero syempre special ka sakin.",
        "Ayan ha, ginawan na kita ng letter. Wag ka na magreklamo HAHAHA.",
        "Alam mo naman na kahit lagi kitang inaasar, favorite pa rin kita.",
        "Bihira lang ako maging sweet kaya sulitin mo na 'to HAHAHA."
    ],

    other: [
        "Glad ako na nakilala kita.",
        "Di ko man lagi sabihin pero naa-appreciate kita.",
        "Thankful ako na naging part ka ng life ko.",
        "I'm glad na naging close tayo."
    ]
};


// ========================================
// BANTER RELATIONSHIP MESSAGES
// These replace the normal relationship message
// when Banter is selected.
// ========================================

const banterRelationshipMessages = {

    friend: [
        "Di ko alam pano tayo naging friends pero wala na, too late na para umatras HAHAHA.",
        "Glad naman ako na naging friend kita kahit nakakainis ka minsan.",
        "Di ko man lagi sabihin pero solid ka naman talaga. Wag ka lang masyadong feeling HAHAHA.",
        "Buti na lang naging friends tayo kasi at least may kasama ako sa mga kalokohan."
    ],

    "best friend": [
        "Hoy alam mo naman na kahit lagi kitang inaasar, ikaw pa rin isa sa pinaka-solid kong tao.",
        "Di ko alam pano mo ko natitiis hanggang ngayon pero congrats HAHAHA.",
        "Ang dami na nating kalokohan together, nakakahiya na actually pag binalikan HAHAHA.",
        "Best friend kita so wala ka nang choice, stuck ka na sakin.",
        "Kahit lagi tayong nagbabangayan, alam mo naman na nandito lang ako pag kailangan mo."
    ],

    classmate: [
        "Buti na lang naging classmate kita kasi may kasama akong tumawa kahit dapat nakikinig tayo HAHAHA.",
        "Di ko inexpect na magiging close tayo pero ayun, malas mo HAHAHA.",
        "At least naging masaya yung school dahil may kasama akong manggulo.",
        "Kung wala ka siguro mas tahimik buhay ko, pero mas boring din HAHAHA."
    ],

    sibling: [
        "Kahit nakakairita ka almost daily, syempre kapatid pa rin kita HAHAHA.",
        "Wala naman akong choice sayo, pamilya kita eh HAHAHA. Pero support pa rin kita.",
        "Di tayo sweet sa isa't isa kaya wag kang masanay dito.",
        "Proud naman ako sayo kahit minsan gusto kitang batukan HAHAHA."
    ],

    cousin: [
        "Buti na lang ikaw pinsan ko kasi may kasama akong mang-judge sa family gatherings HAHAHA.",
        "At least may kakampi ako pag may awkward na family event.",
        "Glad naman ako na close tayo kahit minsan puro kalokohan lang.",
        "Pinsan by blood, taga-tawa sa kalokohan by choice HAHAHA."
    ],

    child: [
        "Proud ako sayo, pero wag ka masyadong feeling ha HAHAHA.",
        "Kahit kulit mo minsan, syempre support kita palagi.",
        "Ayan sweet muna ako ngayon, minsan lang 'to HAHAHA.",
        "Kahit lumalaki ka na, nandito pa rin ako para guluhin at suportahan ka."
    ],

    partner: [
        "Ayan ha ginawan kita ng letter, wag mo na sabihin na di ako sweet HAHAHA.",
        "Kahit lagi kitang inaasar, alam mo naman na ikaw pa rin.",
        "Di ko alam pano mo ko natitiis pero salamat na rin HAHAHA.",
        "Bihira lang ako maging ganito ka-sweet so wag kang masanay."
    ],

    babygirl: [
        "Hoy babygirl HAHAHA ayan may letter ka na, wag ka nang magtampo.",
        "Syempre ginawan kita. Wag ka lang masyadong kiligin at baka lumaki ulo mo HAHAHA.",
        "Ayan ha, proof na kaya ko rin maging sweet minsan. Minsan lang.",
        "Alam mo naman na kahit lagi kitang inaasar, favorite pa rin kita. Wag kang feeling masyado HAHAHA.",
        "Hoy babygirl, basahin mo nang maayos 'to kasi baka next year na ulit ako maging sweet HAHAHA."
    ],

    other: [
        "Glad naman ako na nakilala kita kahit minsan nakakainis ka HAHAHA.",
        "Di ko man lagi sabihin pero solid ka naman talaga.",
        "Ayoko maging masyadong sweet pero naa-appreciate naman kita HAHAHA.",
        "Buti na lang naging close tayo. Yun lang, wag ka nang feeling."
    ]
};


// ========================================
// CASUAL EXTRA MESSAGES
// ========================================

const casualExtras = [
    "Anyway, ayoko naman gawing sobrang dramatic 'to hahaha.",
    "Di ko naman hahabaan masyado kasi baka maumay ka sakin.",
    "Pero ayun, gusto ko lang talaga malaman mo yun.",
    "Corny man pakinggan pero totoo naman hahaha.",
    "Basta gets mo na siguro point ko.",
    "Di ko na ie-explain nang sobra, alam mo na yun hahaha."
];


// ========================================
// BANTER EXTRAS
// ========================================

const banterExtras = [
    "Anyway tama na muna yung pagiging sweet ko HAHAHA.",
    "Di ko na hahabaan 'to nang sobra, baka isipin mo miss na miss kita HAHAHA.",
    "Pero ayun, gets mo na siguro yun. Wag ka nang feeling.",
    "Corny na kung corny pero minsan lang naman ako magsabi ng ganito HAHAHA.",
    "Basta alam mo na yun. Di ko na kailangan gumawa ng speech dito.",
    "Seryoso naman ako diyan kahit mukhang hindi dahil puro HAHAHA."
];


// ========================================
// LONGER MESSAGES
// ========================================

const longerMessages = [
    "Alam ko naman na hindi laging okay lahat. May times talaga na nakakapagod or di mo alam kung tama ba ginagawa mo. Pero okay lang yun. Di naman kailangan figured out agad lahat.",

    "If ever dumating yung time na parang di mo alam gagawin mo, chill ka lang. One thing at a time. Di naman kailangan madaliin lahat.",

    "Marami ka pang magagawa and marami ka pang mae-experience. Kaya wag ka masyadong ma-pressure kung hindi pa lahat nangyayari the way you want it to.",

    "May mga bagay talagang di natin kontrolado. Basta gawin mo lang kung ano yung kaya mo and wag mo rin kalimutan mag-enjoy.",

    "Di naman kailangan laging productive or perfect. Minsan okay lang mapagod, magpahinga, tapos try ulit.",

    "Wag mo masyadong isipin kung nauuna yung ibang tao sayo. May sarili ka namang pace, so chill ka lang."
];


// ========================================
// BANTER LONGER MESSAGES
// ========================================

const banterLongerMessages = [
    "Alam ko minsan nakakastress talaga mga bagay-bagay, pero wag mo naman ubusin sarili mo kakaisip. Di naman kailangan ma-figure out lahat agad.",

    "Pag napagod ka, edi magpahinga ka. Di naman contest kung sino pinaka-stressed HAHAHA. Tapos laban ulit pag okay ka na.",

    "Wag ka masyadong mag-overthink sa lahat. Alam kong mahirap sabihin pero minsan kailangan mo lang hayaan muna and tingnan kung saan mapupunta.",

    "Marami ka pang time para gawin yung mga gusto mo. Wag kang nagmamadali na parang may deadline buong buhay mo HAHAHA.",

    "Di mo kailangan maging okay palagi. Pag badtrip ka, badtrip ka muna. Basta wag forever HAHAHA.",

    "And please wag mo i-compare sarili mo palagi sa iba. Iba buhay nila, iba rin sayo. Focus ka na lang sa sarili mong trip."
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
        "Sige na tama na pagiging sweet ko HAHAHA. Balik bardagulan tayo pagbalik mo.",
        "Basta alam mo na yun. Di ko na kailangan maging dramatic. Ingat ka palagi.",
        "Ayun lang naman HAHAHA. Wag mo ko aasarin dahil dito pagbalik mo ah.",
        "Sige enjoy ka muna diyan. Pagbalik mo balik na tayo sa normal na pang-aasar HAHAHA.",
        "Okay tama na HAHAHA baka isipin mo mabait talaga ako. Basta nandito lang ako lagi.",
        "Sige na enough na yung wholesome moment. Alam mo naman support kita lagi.",
        "Okay tapos na HAHAHA wag mo na ipakita sakin 'to ulit nakakahiya.",
        "Basta gets mo na yun HAHAHA. Di na kailangan pahabain.",
        "Okay balik na ko sa pagiging hater mo after nito HAHAHA."
    ]
};


// ========================================
// ESCAPE HTML
// Prevents user input from being treated as HTML
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


    const sender = senderName.value.trim() || "Anonymous";

    const event = retreatName.value.trim();

    const selectedTone = tone.value;

    const selectedLength = length.value;

    const selectedRelationship = relationship.value;


    // ========================================
    // SELECT RELATIONSHIP MESSAGE
    // ========================================

    let relationshipLine;

    if (
        selectedTone === "banter" &&
        banterRelationshipMessages[selectedRelationship]
    ) {

        relationshipLine = randomItem(
            banterRelationshipMessages[selectedRelationship]
        );

    } else {

        relationshipLine = randomItem(
            relationshipMessages[selectedRelationship] ||
            relationshipMessages.other
        );
    }


    // ========================================
    // START LETTER
    // ========================================

    let letter = `
        <p>
            <strong>Dear ${escapeHTML(name)},</strong>
        </p>

        <p>
            ${randomItem(openings[selectedTone])}
            ${relationshipLine}
        </p>
    `;


    // ========================================
    // APPRECIATION
    // ========================================

    if (appreciation.value.trim()) {

        const appreciationText =
            escapeHTML(appreciation.value.trim());


        if (selectedTone === "banter") {

            letter += `
                <p>
                    Pero real talk saglit,
                    naa-appreciate ko talaga
                    ${appreciationText}.
                    Di ko lang lagi sinasabi kasi
                    baka lumaki ulo mo HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Gusto ko lang sabihin na
                    naa-appreciate ko talaga
                    ${appreciationText}.
                    Di ko man 'to lagi nasasabi,
                    napapansin ko naman yun.
                </p>
            `;
        }
    }


    // ========================================
    // MEMORY
    // ========================================

    if (memory.value.trim()) {

        const memoryText =
            escapeHTML(memory.value.trim());


        if (selectedTone === "banter") {

            letter += `
                <p>
                    Tapos syempre di ko makakalimutan
                    ${memoryText}.
                    Ang dami na rin pala nating
                    kalokohan pag inisip HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Tapos syempre di ko makakalimutan
                    ${memoryText}.
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

        if (selectedTone === "banter") {

            letter += `
                <p>
                    ${randomItem(banterExtras)}
                    ${randomItem(banterLongerMessages)}
                </p>
            `;

        } else {

            letter += `
                <p>
                    ${randomItem(casualExtras)}
                    ${randomItem(longerMessages)}
                </p>
            `;
        }
    }


    // ========================================
    // ENCOURAGEMENT
    // ========================================

    if (encouragement.value.trim()) {

        const encouragementText =
            escapeHTML(encouragement.value.trim());


        if (selectedTone === "banter") {

            letter += `
                <p>
                    Pero seryoso,
                    ${encouragementText}.
                    Sundin mo rin minsan sinasabi ko
                    sayo HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Also,
                    ${encouragementText}.
                    Basta wag kang susuko agad ha.
                </p>
            `;
        }
    }


    // ========================================
    // SECOND LONG PARAGRAPH
    // ========================================

    if (selectedLength === "long") {

        if (selectedTone === "banter") {

            const [first, second] =
                twoDifferentItems(banterLongerMessages);

            letter += `
                <p>
                    ${second}
                </p>
            `;

        } else {

            const [first, second] =
                twoDifferentItems(longerMessages);

            letter += `
                <p>
                    ${second}
                </p>
            `;
        }
    }


    // ========================================
    // PERSONAL MESSAGE
    // ========================================

    if (personalMessage.value.trim()) {

        const personalText =
            escapeHTML(personalMessage.value.trim());


        if (selectedTone === "banter") {

            letter += `
                <p>
                    Eto seryoso talaga:
                    <strong>${personalText}</strong>
                    Wag ka ma-touch masyado HAHAHA.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Eto talaga gusto kong tandaan mo:
                    <strong>${personalText}</strong>
                </p>
            `;
        }
    }


    // ========================================
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

                Gawin mo lang gusto mo and
                enjoy mo lang.
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

                Basta gawin mo lang best mo.
            </p>
        `;
    }


    // ========================================
    // RETREAT / EVENT MESSAGE
    // ========================================

    if (event) {

        if (selectedTone === "banter") {

            letter += `
                <p>
                    Enjoy mo lang yung
                    <strong>${escapeHTML(event)}</strong>.

                    Wag puro kalokohan diyan HAHAHA.
                    Sana mag-enjoy ka and may
                    magandang memories kang maiuwi.
                </p>
            `;

        } else {

            letter += `
                <p>
                    Enjoy mo lang yung
                    <strong>${escapeHTML(event)}</strong>.

                    Sana mag-enjoy ka and marami
                    kang magandang memories
                    na maiuwi after.
                </p>
            `;
        }

    } else {

        if (selectedTone === "banter") {

            letter += `
                <p>
                    Enjoy mo lang retreat mo.
                    Wag puro kalokohan diyan HAHAHA.
                    Sana mag-enjoy ka talaga.
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
            - <strong>${escapeHTML(sender)}</strong>
        </p>
    `;


    // SHOW LETTER

    letterPreview.innerHTML = letter;
}


// ========================================
// COPY LETTER
// ========================================

async function copyLetter() {

    const text = letterPreview.innerText.trim();


    if (
        !text ||
        letterPreview.querySelector(".placeholder-text")
    ) {

        alert("Generate ka muna ng letter 😭");

        return;
    }


    try {

        await navigator.clipboard.writeText(text);

        showToast("Letter copied!");

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

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}


// ========================================
// CLEAR FORM
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
            Your generated retreat letter will appear here.
        </p>
    `;
}


// ========================================
// PRINT LETTER
// ========================================

function printLetter() {

    if (
        letterPreview.querySelector(".placeholder-text")
    ) {

        alert("Generate ka muna ng letter 😭");

        return;
    }


    const printWindow = window.open("", "_blank");


    printWindow.document.write(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>Retreat Letter</title>

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
// BUTTON EVENTS
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
