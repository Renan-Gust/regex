// Receive Accept only number
document.querySelectorAll("input.receive").forEach((onKey) => {
    onKey.addEventListener("keypress", (event) => {
        // let theEvent = event || window.event;
        // let key = theEvent.keyCode || theEvent.which;
        // key = String.fromCharCode( key );
        // const regex = /^[0-9,.]+$/;
        // if( !regex.test(key) ) {
        // //    theEvent.returnValue = false;
        //    if(theEvent.preventDefault) theEvent.preventDefault();
        // }

        // function formatarNumero(n) {
        //     var n = n.toString();
        //     var r = '';
        //     var x = 0;

        //     for (var i = n.length; i > 0; i--) {
        //         r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? ',' : '');
        //         x = x == 2 ? 0 : x + 1;
        //     }

        //     return r.split('').reverse().join('');
        // }

        // function numberWithCommas(x) {
        //     var parts = x.toString().split(".");
        //     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //     return parts.join(".");
        // }

        // formatarNumero(onKey.value)
        // numberWithCommas(onKey.value)
        // if(event.keyCode){
        //     onKey.value = numberWithCommas(onKey.value)
        // }

        // const formatNumber = num => num % 1 !== 0 ? num.toLocaleString('pt-br') : num.toLocaleString('pt-br').concat(',00');
        // function formatNumber(num) {
        //     // num % 1 !== 0 ? num.toLocaleString('pt-br') : num.toLocaleString('pt-br').concat(',00');
        //     if(event.keyCode){
        //         onKey.value = num % 1 !== 0 ? num.toLocaleString('pt-br') : num.toLocaleString('pt-br').concat(',00');
        //     }
        // }

        // let formatador = new Intl.NumberFormat('pt-BR',
        // { minimumFractionDigits: 0, maximumFractionDigits: 2 }
        // );

        // [ onKey.value ].forEach(n => {
        //     console.log(formatador.format(n));
        //     let teste = formatador.format(n);

        //     console.log(event.keyCode)
        //     if(event.keyCode){
        //         onKey.value = teste
        //     }
        // });

        // formatNumber(onKey.value)
    })
})

function currency(e) {
    let value = e.currentTarget.value;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');

    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    e.currentTarget.value = value;
    return e;
}

document.querySelectorAll("input.receive").forEach((onKey) => {
    onKey.addEventListener("keyup", (event) => {
        currency(event)
    })
})