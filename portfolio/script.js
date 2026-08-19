const menuBtn = document.getElementById('menuBtn');
let code = document.getElementById('code')

const navMenu = document.getElementById('navMenu');
    menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
 
// const codetext_str={
//     line0:`'Aniket Shinde'`,
//     line1:`'Frontend Developer'`,
//     line2:`'Web Development'`,
    
// }

// const codetext = {
//     line0:`name:`,
//     line1:`'Aniket Shinde'`,
//     line2:`role:`,
//     line3:`'Frontend Developer'`,
//     line4:`passion:`,
//     line5:`'Web Development'`

// }

// function start(){
//     for(let key in codetext){
//         text=codetext[key];
//         type();
//     }
// }

// index=0;
// speed=100;
// function type(){
//     if(index<text.length){
//         text_container.innerText += `${text[index]}`;
//         index = index + 1;
//         setTimeout(type, speed);
//     }else{
//         setTimeout(() => {
//             text_container.innerText = '';
//             index = 0;
//             type();
//         }, 2000);
//     };
// }
// text0=`1\n2\n3\n4\n5\n6\n7\n8\n9\n10`;
// text1=`developer = {\nname:\nrole:\npassion:`;
// text2=`'Aniket Shinde'\n'Frontend Developer'\n'Web Development'`;

// const text_array=[
//     `1`,
//     `developer = {\n`,
//     `name: `,
//     `'Aniket Shinde'\n`,
//     `role: `,
//     `'Frontend Developer'\n`,
//     `passion: `,
//     `'Web Development'`,
//     `}`
// ]

// let index=0;
// let speed=100;

// async function start(){
//     await type_number(text_array[0]);
//     await type_normal(text_array[1])
// }

// function type_number(text){
//     numbertxt.innerText += `${text[index]}`;
//     // setTimeout(() => type_normal(text), speed);
// }

// function type_normal(text){
//     if(index<text.length){
//         normaltxt.innerText += `${text[index]}`;
//         index = index + 1;
//         console.log(text)
//         setTimeout(() => type_normal(text), speed);
//     }else{
//         setTimeout(() => type_str(text), 2000);
//     }
// }

// function type_str(text){
//     if(index<text.length){
//         strtext.innerText += `${text[index]}`;
//         index = index + 1;
//         setTimeout(() => type_str(text), speed);
//     }else{
//         setTimeout(() => type_normal(text), 2000);
//     }
// }

// start();
const speed= 90;

// #=dark grey 
// @=red 
// !=light blue 
// $ = dark blue

const text_array=[
    "#",
    "01   ",
    "@",
    "const ",
    "$",
    "developer = {\n",
    "#",
    "02   ",
    "   name: ",
    "!",
    "'Aniket Shinde'",
    ",\n",
    "#",
    "03   ",
    "   role: ",
    "!",
    "'Frontend Developer'",
    ",\n",
    "#",
    "04   ",
    "   passion: ",
    "!",
    "'Web Development'",
    ",\n",
    "#",
    "05   ",
    "   skills:",
    "[ ",
    "!",
    "'HTML'",
    ",",
    "!",
    "'CSS'",
    ",",
    "!",
    "'JS'",
    ",",
    "!",
    "'GIT & GITHUB'",
    "]\n",
    "#",
    "05   ",
    "   tools:",
    "[ ",
    "!",
    "'VS Code'",
    ",",
    "!",
    "'git'",
    "]\n",
    "#",
    "06   ",
    "   currently:",
    "!",
    "'Building amazing digital experiences'",
    ",\n",
    "#",
    "07   ",
    "$",
    "}",
    ";",
];

async function typing(){
    for(let i=0 ; i<text_array.length;i++){
        if(text_array[i]==="!"){
            await new Promise((resolve)=>{
                let index=0;
                let text = text_array[i+1];

                const span = document.createElement("span");
                span.className="str";
                code.append(span);

                const type= ()=>{
                    if(index<text.length){
                        span.innerText += text[index];
                        index++;
                        setTimeout(type , speed);
                    }else{
                        resolve();
                    }
                };
                type();
            });
            i++;
        }else if(text_array[i]==="#"){
            await new Promise((resolve)=>{
                let index=0;
                let text = text_array[i+1];

                const span = document.createElement("span");
                span.className="number";
                code.append(span);

                const type= ()=>{
                    if(index<text.length){
                        span.innerText += text[index];
                        index++;
                        setTimeout(type , speed);
                    }else{
                        resolve();
                    }
                };
                type();
            });
            i++;

            }else if(text_array[i]==="$"){
            await new Promise((resolve)=>{
                let index=0;
                let text = text_array[i+1];

                const span = document.createElement("span");
                span.className="blue";
                code.append(span);

                const type= ()=>{
                    if(index<text.length){
                        span.innerText += text[index];
                        index++;
                        setTimeout(type , speed);
                    }else{
                        resolve();
                    }
                };
                type();
            });
            i++;

            }else if(text_array[i]==="@"){
            await new Promise((resolve)=>{
                let index=0;
                let text = text_array[i+1];

                const span = document.createElement("span");
                span.className="kw";
                code.append(span);

                const type= ()=>{
                    if(index<text.length){
                        span.innerText += text[index];
                        index++;
                        setTimeout(type , speed);
                    }else{
                        resolve();
                    }
                };
                type();
            });
            i++;
            

        }else{
            await start_typing(text_array[i]);
        }
    }
};

function start_typing(text){
    return new Promise((resolve)=>{
        let index = 0 ;
        const textNode = document.createTextNode("");
        code.append(textNode);
        const stype=()=>{
            if(index<text.length){
                textNode.textContent += text[index];
                index++
                setTimeout(stype , speed);
            }else{
                resolve();
            }
        };
        stype();
    });
};

typing();