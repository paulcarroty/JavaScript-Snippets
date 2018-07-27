let car = {
    model: 'tesla x',
    color: 'black',
    tyres: 'michelin'
};

let carProxy = new Proxy(car, {
        get(target, tyres) {
            console.log(`Your car has the tyres: `)
            return target.tyres.charAt(0).toUpperCase() + target.tyres.slice(1);
        }
    },

    {
        set(target, spec, value) {
            console.log(`Let's change the ${spec} of ${target} to`);
            return car.spec = value;
        }
    }

);

console.log(carProxy.tyres);
//Your car has the tyres: 
//Michelin

carProxy.tyres = 'yokohama';
console.log(carProxy.tyres);
// Your car has the tyres: 
// Yokohama


