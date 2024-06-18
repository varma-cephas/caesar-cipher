const encryption_form = document.querySelector(".encryption-form");
const encryption_text = document.querySelector(".encryption-text");
const encryption_key = document.querySelector(".encryption-key");
const encryption_result = document.querySelector(".encryption-result");


const decryption_form = document.querySelector(".decryption-form");
const decryption_text = document.querySelector(".decryption-text");
const decryption_key = document.querySelector(".decryption-key");
const decryption_result = document.querySelector(".decryption-result");


function encrypt(text, key){
    let encryptedText = "";
    let ascii_code;
    if(key >= 1 && key <= 25){
        for(let x = 0; x < text.length; x++){
            if(text.charCodeAt([x]) >= 97 && text.charCodeAt([x]) <= 122 || text.charCodeAt([x]) >= 65 && text.charCodeAt([x]) <= 90){
                if(!text.charCodeAt([x]) + key > 122){
                    console(text.charCodeAt([x]) + key)
                    ascii_code = text.charCodeAt([x]) + key;
                    encryptedText += String.fromCharCode(ascii_code);
                }else{
                    ascii_code = text.charCodeAt([x]) + key;
                    if(ascii_code > 122){
                        let startOverNum = 122 - text.charCodeAt([x]);
                        // text.charCodeAt([x]) + startOverNum;
                        let actualStartOverValue = key - startOverNum;
                        ascii_code = actualStartOverValue + 96;
                        // console.log(ascii_code)
                        encryptedText += String.fromCharCode(ascii_code);
                    }else{
                        ascii_code = text.charCodeAt([x]) + key;
                        encryptedText += String.fromCharCode(ascii_code);
                    }
                }
            }else{
                encryptedText += text[x]
            }
        }
    }else{
        console.log("Please enter a valid key")
    }
    return encryptedText
}

function decrypt(text, key){
    let decryptedText = "";
    let ascii_code;

    for(let x = 0; x < text.length; x++){
        // console.log(text.charCodeAt([x]) - key - 96);
        // minus backwards. when you reach 97 or 96. start minusing from 122 the remainder left from the key.
        // example: if the encrypted text is p and the key is 18. minus 18 - from 96. minus the answer from 96. and minus the answer from 122
        if(text.charCodeAt([x]) >= 97 && text.charCodeAt([x]) <= 122 || text.charCodeAt([x]) >= 65 && text.charCodeAt([x]) <= 90){
            // console.log(text.charCodeAt([x]))
            ascii_code = text.charCodeAt([x]) - key
            if(ascii_code >= 92){
                if(ascii_code < 97){
                    let finalSubtractionLowerCase = 96 - ascii_code;
                    ascii_code = 122 - finalSubtractionLowerCase;
                    decryptedText += String.fromCharCode(ascii_code);
                }else{
                    decryptedText += String.fromCharCode(ascii_code);
                }
            }else{
                if(ascii_code < 65){
                    //case where we have to go back to the beginning of the alphabet, subtract from the starting ascii number eg:64 and subtract the answer from the ascii number eg: 90
                    let finalSubtractionUpperCase = 64 - ascii_code;
                    ascii_code = 90 - finalSubtractionUpperCase;
                    decryptedText += String.fromCharCode(ascii_code);
                }else{
                    decryptedText += String.fromCharCode(ascii_code);
                }
            }
        }
        else{
            ascii_code = text.charCodeAt([x]);
            decryptedText += String.fromCharCode(ascii_code);
        }
    }
    return decryptedText;
}

// console.log(encrypt("hello_world", 5));
// console.log(decrypt("mjqqt_btwqi", 6));

encryption_form.addEventListener("submit", (event)=>{
    let encryptedStr = encrypt(encryption_text.value, Number(encryption_key.value));
    encryption_result.textContent = encryptedStr;
    event.preventDefault();
})

decryption_form.addEventListener("submit", (event)=>{
    let decryptedStr = decrypt(decryption_text.value, Number(decryption_key.value));
    decryption_result.textContent = decryptedStr;
    event.preventDefault();
})
