const idCodeInput = document.querySelector('#idCode');

function defineGender () {
    const data = idCodeInput.value[0];
    const output = document.querySelector('#output').children[1].children[0].children[0];
    let gender;
    if (data === '0' || data === '9') {
        gender = 'Unknown'
    } else if (data % 2 === 0) {
        gender = 'Female';
    } else {
        gender = 'Male';
    }
    output.innerText = gender;
}

function defineDateOfBirth() {
    const yearData = idCodeInput.value[0];
    const dob = idCodeInput.value.slice(1, 7);
    const output = document.querySelector('#output').children[1].children[0].children[1];
    let ear;
    if (yearData === '1' || yearData === '2') {
        ear = '18';
    } else if (yearData === '3' || yearData === '4') {
        ear = '19';
    } else if (yearData === '5' || yearData === '6') {
        ear = '20';
    } else if (yearData === '7' || yearData === '8') {
        ear = '21';
    } else {
        ear = null;
    }
    if (ear) {
    output.innerText = `${dob.slice(4,6)}.${dob.slice(2,4)}.${ear}${dob.slice(0, 2)}`;
    } else {
        output.innerText = `${dob.slice(4,6)}.${dob.slice(2,4)}.${dob.slice(0, 2)}`;
    }

}

function defineRegionBirth() {
    const regionData = idCodeInput.value.slice(7, 10);
    const output = document.querySelector('#output').children[1].children[0].children[2];
    if (regionData >= '001' && regionData <= '010') {
        output.innerText = 'Kuressaare haigla';
    } else if (regionData >= '011' && regionData <= '019') {
        output.innerText = 'Tartu Ülikooli Naistekliinik';
    } else if (regionData >= '021' && regionData <= '150') {
        output.innerText = 'Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)';
    } else if (regionData >= '151' && regionData <= '160') {
        output.innerText = 'Keila haigla';
    } else if (regionData >= '161' && regionData <= '220') {
        output.innerText ='Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)';
    } else if (regionData >= '221' && regionData <= '270') {
        output.innerText ='Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)';
    } else if (regionData >= '271' && regionData <= '370') {
        output.innerText ='Maarjamõisa kliinikum (Tartu), Jõgeva haigla';
    } else if (regionData >= '371' && regionData <= '420') {
        output.innerText ='Narva haigla';
    } else if (regionData >= '421' && regionData <= '470') {
        output.innerText ='Pärnu haigla';
    } else if (regionData >= '471' && regionData <= '490') {
        output.innerText ='Haapsalu haigla';
    } else if (regionData >= '491' && regionData <= '520') {
        output.innerText ='Järvamaa haigla (Paide)';
    } else if (regionData >= '521' && regionData <= '570') {
        output.innerText ='Rakvere haigla, Tapa haigla';
    } else if (regionData >= '571' && regionData <= '600') {
        output.innerText ='Valga haigla';
    } else if (regionData >= '601' && regionData <= '650') {
        output.innerText ='Viljandi haigla';
    } else if (regionData >= '651' && regionData <= '700') {
        output.innerText ='Lõuna-Eesti haigla (Võru), Põlva haigla';
    } else {
        output.innerText = 'unknown';
    }
}

function validateIdCode() {
    const data = idCodeInput.value;
    const output = document.querySelector('#output').children[1].children[0].children[3];
    const check1 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 1], check2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    let result = 0;
    for (let i = 0; i< 10; i++) {
        result += data[i] * check1[i];
    }
    if (result % 11 !== Number(data[data.length - 1])) {
        result = 0;
        for (let i = 0; i< 10; i++) {
            result += data[i] * check2[i];
        }
        if (result % 11 === Number(data[data.length - 1])) {
            output.innerText = 'Valid'
        } else {
            output.innerText = 'Invalid';
            output.getElementsByClassName.color = 'red';
        }
} else {
    output.innerText = 'Valid';
}
}

function showResult() {
    defineGender()
    defineDateOfBirth()
    defineRegionBirth()
    validateIdCode()
};