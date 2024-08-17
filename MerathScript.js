let merath = window.prompt('.أدخل قيمة الميراث الكلية');
let RemainingMerath = merath;
let wifeMerath = 'Wife does not exist';
let NumberOfFemaleChildern;
if (merath) {
    let wifeExists = window.confirm('هل يوجد زوجة؟');
    if (wifeExists == true) {
        wifeMerath = merath * (1 / 8);
        RemainingMerath = merath - wifeMerath;
    }
    let NumberOfMaleChildern = window.prompt('.أدخل عدد الأبناء الذكور');
    if (NumberOfMaleChildern < 1) {
        document.write('Number of male children cannot be less than 1');
    } else {
        NumberOfFemaleChildern = window.prompt('.أدخل عدد البنات الإناث');
        if (NumberOfFemaleChildern < 1) {
            document.write('Number of female children cannot be less than 1');
        } else {
            let TotalMalePortions = NumberOfMaleChildern * 2;
            let TotalFemalePortions = NumberOfFemaleChildern;
            let TotalPortions = parseInt(TotalMalePortions) + parseInt(TotalFemalePortions);
            let SinglePortion = RemainingMerath / TotalPortions;
            let OneFemalePortion = SinglePortion;
            let OneMalePortion = SinglePortion * 2;
            document.write(`Total Merath: ${merath}<br> 
                Wife Merath: ${wifeMerath}<br> Single Male Merath: ${OneMalePortion}<br>
                Single Female Merath: ${OneFemalePortion}
         `)
        }
    }
} else {
    document.write('.لم تدخل قيمة');
}

