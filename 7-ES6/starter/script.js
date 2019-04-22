class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numberOfTrees) {
        super(name, buildYear);
        this.area = area; // km^2
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;

        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    };

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                    new Park('National Park', 1894, 2.9, 3541),
                    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5)];

function calc(arr) {

    // used to reduce an array to a single value (from ES5)
    const sum = arr.reduce((prev, curr, index) => prev  + curr, 0); // 0 is the accumilator. Where we want to start counting from. i.e. from 0

    // use destructuring and return an array of 2 elements, then use destructuring to save these elements into two variables when calling this fxn
    return [sum, sum/arr.length];
}

function reportPark(p) {
    console.log('--------------PARKS REPORT---------------');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age

    // using destructuring here

    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);

    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

    // Which park has more than 1000 trees

    const index = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[index].name} has more than 1000 trees.`)
}

function reportStreets(s) {
    console.log('--------------STREETS REPORT---------------');

    // Total average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km`);

    // classify the sizes
    s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreets(allStreets);