# blueRex
Blue Rex is a light weight JS/TS library for sending request over the server by using XMLHttpRequest. functions same like Axios but it's more light weight from axios.
in axios I faced a issue on sending POST request to php backend server I try to solve the issue but it's hard to manage it therefore i created it which work with express.js, php, django server, etc.

### Simple use of code
```
const blueRex = {
    get: (u, d, async = true) => {
        let x = new XMLHttpRequest();
        let method = 'GET';
        let data = d ? d : {};
        return new Promise((a, b) => {
            x.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        let t = this.response;
                        a(t);
                    }
                    else {
                        b(this.response);
                    }
                }
            };
            x.open(method.toUpperCase(), u, async);
            x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            x.send(u);
        });
    },
    post: (u, d, async = true) => {
        let x = new XMLHttpRequest();
        let method = 'POST';
        let data = d ? d : {};
        const setParams = (d_) => {
            let p = '';
            for (let k in d_)
                p += k + '=' + d_[k] + '&';
            console.log(p);
            return p;
        };
        return new Promise((a, b) => {
            x.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        let t = this.response;
                        a(t);
                    }
                    else {
                        b(this.response);
                    }
                }
            };
            x.open(method.toUpperCase(), u, async);
            x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            x.send(setParams(data));
        });
    }
};

```

simple implementing post and get methods I working on it to improve the performance and stabilatiy

# Example use of GET Method

```
blueRex.post('http://www.example.com').then((e) => {
    console.log('res: ', e);
}).catch((e) => {
    console.log('res: ', e);
});

```

# Example of POST Method

```
let data = { a: 1, b: 2, c: 3 }
blueRex.post('http://www.example.com', data).then((e) => {
    console.log('res: ', e);
}).catch((e) => {
    console.log('res: ', e);
});
```
