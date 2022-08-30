const blueRex:any = { 
    get: (u:string, d:any ,async:boolean = true)=>{
        let x = new XMLHttpRequest();
        let method = 'GET';
        let data = d ? d : {};
        return new Promise((a, b)=>{
                x.onreadystatechange = function(){
                    if(this.readyState === 4){
                        if(this.status === 200){
                            let t = this.response
                            a(t)
                        }else{
                            b(this.response)
                        }
                    }
                }
            x.open(method.toUpperCase(), u, async)
            x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            x.send(u)
        })
    },
    post: (u:string, d:any, async:boolean = true)=>{
        let x = new XMLHttpRequest();
        let method = 'POST';
        let data = d ? d : {};
        const setParams =(d_:any)=>{
            let p:any = ''
            for(let k in d_) p += k + '=' + d_[k] + '&'
            console.log(p)
            return p
        }
        return new Promise((a, b)=>{
                x.onreadystatechange = function(){
                    if(this.readyState === 4){
                        if(this.status === 200){
                            let t = this.response
                            a(t)
                        }else{
                            b(this.response)
                        }
                    }
                }
            x.open(method.toUpperCase(), u, async)
            x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            x.send(setParams(data))
        })
    }
}
// blueRex.post('https://jsonplaceholder.typicode.com/todos/1', {a: 1, b: 2, c:3}).then((e:any) => {
//     console.log('res: ', e)
//     return e
// }).catch((e:any) => {
//     console.log('res: ', e)
// })
  
