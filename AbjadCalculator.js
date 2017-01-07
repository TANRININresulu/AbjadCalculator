function getSum(total, num) {return total + num};
String.prototype.abjad = function() {
if (this.indexOf('ا') > -1){var ا = this.split("ا").join("1").match(/(1)/gim).map(Number).reduce(getSum)}else{ا=0}
if (this.indexOf('آ') > -1){var آ = this.split("آ").join("1").match(/(1)/gim).map(Number).reduce(getSum)}else{آ=0}
if (this.indexOf('ب') > -1){var ب = this.split("ب").join("2").match(/(2)/gim).map(Number).reduce(getSum)}else{ب=0}
if (this.indexOf('پ') > -1){var پ = this.split("پ").join("2").match(/(2)/gim).map(Number).reduce(getSum)}else{پ=0}
if (this.indexOf('ج') > -1){var ج = this.split("ج").join("3").match(/(3)/gim).map(Number).reduce(getSum)}else{ج=0}
if (this.indexOf('چ') > -1){var چ = this.split("چ").join("3").match(/(3)/gim).map(Number).reduce(getSum)}else{چ=0}
if (this.indexOf('د') > -1){var د = this.split("د").join("4").match(/(4)/gim).map(Number).reduce(getSum)}else{د=0}
if (this.indexOf('ه') > -1){var ه = this.split("ه").join("5").match(/(5)/gim).map(Number).reduce(getSum)}else{ه=0}
if (this.indexOf('و') > -1){var و = this.split("و").join("6").match(/(6)/gim).map(Number).reduce(getSum)}else{و=0}
if (this.indexOf('ز') > -1){var ز = this.split("ز").join("7").match(/(7)/gim).map(Number).reduce(getSum)}else{ز=0}
if (this.indexOf('ژ') > -1){var ژ = this.split("ژ").join("7").match(/(7)/gim).map(Number).reduce(getSum)}else{ژ=0}
if (this.indexOf('ح') > -1){var ح = this.split("ح").join("8").match(/(8)/gim).map(Number).reduce(getSum)}else{ح=0}
if (this.indexOf('ط') > -1){var ط = this.split("ط").join("9").match(/(9)/gim).map(Number).reduce(getSum)}else{ط=0}
if (this.indexOf('ی') > -1){var ی = this.split("ی").join("10").match(/(10)/gim).map(Number).reduce(getSum)}else{ی=0}
if (this.indexOf('ي') > -1){var ي = this.split("ي").join("10").match(/(10)/gim).map(Number).reduce(getSum)}else{ي=0}
if (this.indexOf('ک') > -1){var ک = this.split("ک").join("20").match(/(20)/gim).map(Number).reduce(getSum)}else{ک=0}
if (this.indexOf('گ') > -1){var گ = this.split("گ").join("20").match(/(20)/gim).map(Number).reduce(getSum)}else{گ=0}
if (this.indexOf('ل') > -1){var ل = this.split("ل").join("30").match(/(30)/gim).map(Number).reduce(getSum)}else{ل=0}
if (this.indexOf('م') > -1){var م = this.split("م").join("40").match(/(40)/gim).map(Number).reduce(getSum)}else{م=0}
if (this.indexOf('ن') > -1){var ن = this.split("ن").join("50").match(/(50)/gim).map(Number).reduce(getSum)}else{ن=0}
if (this.indexOf('س') > -1){var س = this.split("س").join("60").match(/(60)/gim).map(Number).reduce(getSum)}else{س=0}
if (this.indexOf('ع') > -1){var ع = this.split("ع").join("70").match(/(70)/gim).map(Number).reduce(getSum)}else{ع=0}
if (this.indexOf('ف') > -1){var ف = this.split("ف").join("80").match(/(80)/gim).map(Number).reduce(getSum)}else{ف=0}
if (this.indexOf('ص') > -1){var ص = this.split("ص").join("90").match(/(90)/gim).map(Number).reduce(getSum)}else{ص=0}
if (this.indexOf('ق') > -1){var ق = this.split("ق").join("100").match(/(100)/gim).map(Number).reduce(getSum)}else{ق=0}
if (this.indexOf('ر') > -1){var ر = this.split("ر").join("200").match(/(200)/gim).map(Number).reduce(getSum)}else{ر=0}
if (this.indexOf('ش') > -1){var ش = this.split("ش").join("300").match(/(300)/gim).map(Number).reduce(getSum)}else{ش=0}
if (this.indexOf('ت') > -1){var ت = this.split("ت").join("400").match(/(400)/gim).map(Number).reduce(getSum)}else{ت=0}
if (this.indexOf('ث') > -1){var ث = this.split("ث").join("500").match(/(500)/gim).map(Number).reduce(getSum)}else{ث=0}
if (this.indexOf('خ') > -1){var خ = this.split("خ").join("600").match(/(600)/gim).map(Number).reduce(getSum)}else{خ=0}
if (this.indexOf('ذ') > -1){var ذ = this.split("ذ").join("700").match(/(700)/gim).map(Number).reduce(getSum)}else{ذ=0}
if (this.indexOf('ض') > -1){var ض = this.split("ض").join("800").match(/(800)/gim).map(Number).reduce(getSum)}else{ض=0}
if (this.indexOf('ظ') > -1){var ظ = this.split("ظ").join("900").match(/(900)/gim).map(Number).reduce(getSum)}else{ظ=0}
if (this.indexOf('غ') > -1){var غ = this.split("غ").join("1000").match(/(1000)/gim).map(Number).reduce(getSum)}else{غ=0}

    return ا+آ+ب+پ+ج+چ+د+ه+و+ز+ژ+ح+ط+ی+ي+ک+گ+ل+م+ن+س+ع+ف+ص+ق+ر+ش+ت+ث+خ+ذ+ض+ظ+غ
};

Ask();

function Ask() {
    var text = prompt("Please enter your Arabic text");
    if (text != null) {
    alert("Gematrical value is: " + text.abjad())
    document.getElementById("result").innerHTML = text.abjad();
    }
}
