const url = 'https://swapi.co/api/planets';

const btn = document.createElement('button');
btn.textContent ='press me';
document.body.appendChild(btn);
btn.addEventListener('click', function () {
    fetchAll(url, []).then((planets)=> {
        outputPlanets(planets);
    });
});

function fetchAll(url, planets) {
    return new Promise((resolve, reject)=> {
      return fetch(url).then(response => {
           return response.json();
       }).then((data) => {
         planets = planets.concat(data.results);
        // console.log(planets);
           if (data.next) {
               fetchAll(data.next, planets).then(resolve);
           } else {
             let arr = planets.map( item => {
                return {
                    name: item.name,
                     films: item.films
                };
            });
              resolve(arr);
           }
       })
    });
}

const output = document.createElement('div');
document.body.appendChild(output);

function outputPlanets(data) {
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.textContent = element.name;
        
        const ul = document.createElement('ul');

        for(let x= 0; x< element.films.length; x++) {
           const li = document.createElement('li');
           li.textContent = element.films[x];
           ul.appendChild(li);
        }
        div.appendChild(ul);
        output.appendChild(div);
    });
}

function fetchData(url) {
    fetch(url)
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            output.textContent = `${data.count} results found`;

            if (data.next) {
                const btn2 = document.createElement('button');
                btn2.textContent = 'next';
                output.appendChild(btn2);
                btn2.addEventListener('click', function () {
                    fetchData(data.next)
                });
            }

            const planets = data.results.map( item => {
                console.log(item);
                return {
                    name: item.name,
                     films: item.films
                };
            });

            outputPlanets(planets);
        })
}

