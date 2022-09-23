let inter = null;
const promise  = (u, v, n = 20) => new Promise(
    (resolve, reject) => {
        
        let count = 0 ;
        inter = setInterval(() => {
            if( count > n ){
                clearInterval(inter);
                resolve(u);

                return ;
            }
            [u, v] = [v, u + v];
            console.log(u)
            count++;
        }, 500);
    }
);

promise(1,1).then(res => {console.log(res) ;});


 function* fibo(u, v, n = 20){

}