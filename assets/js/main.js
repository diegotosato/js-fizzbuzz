// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"





// Tools:
// Loop --> for (counter; condition; increase;)
// arithmetics operator --> === equal value and equal type; % modulus;
// conditional instruction --> if/else




//Task

//#1 - Scrivi un programma che stampi i numeri da 1 a 100
// "for" syntax with "i" initial value 1 with <= 100 condition
for (let i = 1; i <= 100; i++) {

    //#2 - per i multipli di 3 stampi “Fizz” al posto del numero
    // i % 3 === 0 --> Fizz
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
        //#3 - per i multipli di 5 stampi Buzz
        // i % 5 === 0 --> Buzz
    } else {
        console.log(i);
    }




}



//#4 - Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
// i % (3 && 5) === 0 --> FizzBuzz --> ${fizz}${buzz}