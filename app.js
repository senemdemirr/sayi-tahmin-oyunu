const randomInput = document.getElementById('randomNum');
const predictedInput = document.getElementById('predictedNum');
const modalOpacity = document.querySelector('.modal-opacity');
const modalMessage = document.querySelector('.modal-message');
const closeButton = document.querySelector('.close');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');


const handlePrediction = () => {
    const limitNumber = randomInput.value;
    var randomNumber = Math.ceil(Math.random() * limitNumber);
    var predictedNumber = predictedInput.value;
    if (!randomInput.value) {
        message(
            'Bu alan zorunludur',
            'Limit alanı doldurulması zorunlu bir alandır'
        );
        return;
    }
    if (!predictedInput.value) {
        message(
            'Bu alan zorunludur',
            'Tahmin alanı doldurulması zorunlu bir alandır'
        );
        return;
    }
    if (parseInt(predictedNumber) > parseInt(limitNumber)) {
        message(
            'HATA!!!!!!!',
            'Tahmin sayısı belirlenen limitten büyük olamaz'
        );
        return;
    }
    randomNumber == predictedNumber
        ? message('Tebrikler', 'Doğru tahmin ettiniz')
        : message('Maalesef' , 'Yanlış tahmin aranılan sayı ' + randomNumber );

};
closeButton.addEventListener('click', () => {
    modalMessage.style.visibility = 'hidden';
    modalOpacity.style.visibility = 'hidden';
    modalMessage.style.top = '-180px';
});
const message = (titleMessage, subtitleMessage) => {
    title.innerText = titleMessage;
    subtitle.innerText = subtitleMessage;
    modalMessage.style.visibility = 'visible';
    modalMessage.style.top = '10px';
    modalOpacity.style.visibility = 'visible';
}

randomInput.addEventListener("keyup" , function(event){
    if(event.keyCode===13){
        document.getElementById('btn').click();
    }
});
predictedInput.addEventListener("keyup" , function(event){
    if(event.keyCode===13){
        document.getElementById('btn').click();
    }
});

