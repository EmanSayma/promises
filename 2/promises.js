let posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(()=> {
        let output = '';
        posts.forEach( post => {
          output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            posts.push(post);

            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }

        }, 2000);
    });
}

// createPost({title: 'Post three', body: 'This is post three'})
//         .then(getPosts)
//         .catch( err => console.log(err));


// Async / Await
// async function init() {
//     await createPost({title: 'Post three', body: 'This is post three'});

//     getPosts();
// }

// init();

// Async / Await / fetch
//  async function fetchUsers() {
//     const res =  await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     console.log(data);
// }

// fetchUsers();

//Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//                      .then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

let log = console.log;

log('a');

log(1+3);

setTimeout(()=> {
   log('inside setTimeout');
}, 1000);

log('hello world');

const p = new Promise((resolve, reject)=> {
   setTimeout(()=> {
    resolve('YP');
    
   }, 1000);
});

log(p);

p.then((val) => log(val));

setTimeout(()=> {
    log(p);
 }, 1000);
log('final');


new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});


let promise1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
       resolve('foo');
    }, 1000);
});

promise1.then((value)=> {
    console.log(value);
});

console.log(promise1);