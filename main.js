const gums = {
    gum1: { name: "Aftertaste", image: "media/aftertaste.png" },
    gum2: { name: "Burned Out", image: "media/burned_out.png"},
    gum3: { name: "Dead of Nuclear Winter", image: "media/dead_of_nuclear_winter.png"},
    gum4: { name: "Ephemeral Enhancement", image: "media/ephemeral_enhancement.png"},
    gum5: { name: "I'm Feeling Lucky", image: "media/im_feeling_lucky.png"},
    gum6: { name: "Immolation Liquidation", image: "media/immolation_liquidation.png"},
    gum7: { name: "Licensed Contractor", image: "media/licensed_contractor.png"},
    gum8: { name: "Phoenix Up", image: "media/phoenix_up.png"},
    gum9: { name: "Pop Shocks", image: "media/pop_shocks.png"},
    gum10: { name: "Respin Cycle", image: "media/respin_cycle.png"}
}


for (let key in gums) {
    let nameEl = document.getElementById(`${key}__name`);
    let imageEl = document.getElementById(`${key}__image`);

    if (nameEl) nameEl.innerText = gums[key].name;
    if (imageEl) imageEl.src = gums[key].image;
}

// titles 
