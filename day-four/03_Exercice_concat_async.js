const TMER = 500;

const concat = (content, callback ) => {
    setTimeout(() => {
        callback (content); // fonction de callback
    }, TMER);
};

concat("Hello ", content => {
    let str = content;
    concat("World ", content =>{
        str+=content;
        concat("! ", content => {
            str += content;

            console.log(str);
        })
    })
});