const gums = [
    { name: "Aftertaste", image: "media/gumballs/gum-after.png" },
    { name: "Bullet Boost", image: "media/gumballs/gum-bb.png" },
    { name: "Unbearable", image: "media/gumballs/gum-bear.png" },
    { name: "Board Games", image: "media/gumballs/gum-bg.png" },
    { name: "Burned Out", image: "media/gumballs/gum-bo.png" },
    { name: "Board to Death", image: "media/gumballs/gum-btd.png" },
    { name: "Cache Back", image: "media/gumballs/gum-cb.png" },
    { name: "Licensed Contractor", image: "media/gumballs/gum-contractor.png" },
    { name: "Crate Power", image: "media/gumballs/gum-cp.png" },
    { name: "Crawl Space", image: "media/gumballs/gum-crawl.png" },
    { name: "Disorderly Combat", image: "media/gumballs/gum-dis.png" },
    { name: "Death of Nuclear Winter", image: "media/gumballs/gum-donw.png" },
    { name: "Ephemeral Enhancement", image: "media/gumballs/gum-ee.png" },
    { name: "Extra Credit", image: "media/gumballs/gum-extra.png" },
    { name: "Fatal Contraption", image: "media/gumballs/gum-fc.png" },
    { name: "Flavor Hexed", image: "media/gumballs/gum-fh.png" },
    { name: "Fear in Headlights", image: "media/gumballs/gum-fih.png" },
    { name: "Head Drama", image: "media/gumballs/gum-hd.png" },
    { name: "Idle Eyes", image: "media/gumballs/gum-ie.png" },
    { name: "I'm Feeling Lucky", image: "media/gumballs/gum-ifl.png" },
    { name: "Immolation Liquidation", image: "media/gumballs/gum-il.png" },
    { name: "Kill Joy", image: "media/gumballs/gum-kj.png" },
    { name: "Killing Time", image: "media/gumballs/gum-kt.png" },
    { name: "Mind Blown", image: "media/gumballs/gum-mb.png" },
    { name: "Near Death Experience", image: "media/gumballs/gum-nde.png" },
    { name: "On The House", image: "media/gumballs/gum-oth.png" },
    { name: "Perkaholic", image: "media/gumballs/gum-perk.png" },
    { name: "Pop Shocks", image: "media/gumballs/gum-pop.png" },
    { name: "Power Vacuum", image: "media/gumballs/gum-powervac.png" },
    { name: "Profit Sharing", image: "media/gumballs/gum-ps.png" },
    { name: "Phoenix Up", image: "media/gumballs/gum-pu.png" },
    { name: "Respin Cycle", image: "media/gumballs/gum-rc.png" },
    { name: "Reign Drops", image: "media/gumballs/gum-rd.png" },
    { name: "Round Robbin'", image: "media/gumballs/gum-rr.png" },
    { name: "Shopping Free", image: "media/gumballs/gum-shop.png" },
    { name: "Slaughter Slide", image: "media/gumballs/gum-slide.png" },
    { name: "Self Medication", image: "media/gumballs/gum-sm.png" },
    { name: "Soda Fountain", image: "media/gumballs/gum-soda.png" },
    { name: "Secret Shopper", image: "media/gumballs/gum-ss.png" },
    { name: "Temporal Gift", image: "media/gumballs/gum-tg.png" },
    { name: "Unquenchable", image: "media/gumballs/gum-u.png" },
    { name: "Undead Man Walking", image: "media/gumballs/gum-umw.png" },
    { name: "Who's Keeping Score?", image: "media/gumballs/gum-wks.png" },
    { name: "Wall Power", image: "media/gumballs/gum-wp.png" }
];


const gumsEl = document.getElementById("gums");

// Get only the first 3 items
Object.entries(gums).slice(0, 3).forEach(([key, value]) => {
    // Append new article elements using innerHTML
    gumsEl.innerHTML += `
        <article class="gum">
            <h2 id="${key}__name" class="gum__name">${value.name}</h2>
            <img 
            src="${value.image}" 
            alt="Gumball" 
            class="gum__image" 
            id="${key}__image">
        </article>
    `;
});