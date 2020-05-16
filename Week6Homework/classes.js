class State {
    constructor(lat, long, zoom, name, id, json) {
        this.lat = lat,
        this.long = long,
        this.zoom = zoom,
        this.name = name, 
        this.id = id,
        this.json = json
    }
    slogan() {
        console.log("Here's what they think about us.");
    }
}

const neb = new State(41.634915, -99.785886, 7, "Nebraska", "nebMap", "Nebraska.json");
const iowa = new State(42.418086, -93.589918, 7, "Iowa", "iowaMap", "Iowa.json");
const ny = new State(43.201730, -75.532868, 7, "NewYork", "nyMap", "NewYork.json");
const vt = new State(43.994966, -72.666294, 8, "Vermont", "vtMap", "Vermont.json")

neb.slogan = () => {console.log("Really long and boring state to drive through.")}
neb.slogan();

iowa.slogan = () => {console.log("Not quite as long, but still really boring state to drive through.")}
iowa.slogan();

ny.slogan = () => {console.log("Home of the Big Apple.")}
ny.slogan();

vt.slogan = () => {console.log("Wish they were New York.")}
vt.slogan();

class anotherState extends State {
    constructor(lat, long, zoom, name, id, json, anyProp) {
        super(lat, long, zoom, name, id, json);
        this.anyProp = anyProp;
    }
    slogan() {
        console.log("Here's what they think about us.");
    }
}

const makeBelievia = new anotherState(42.418086, -72.666294, 6, "Makebelievia", "mbMap", "mb.json", 24)
console.log(makeBelievia.anyProp);

const pretendVille = new anotherState(43.994966, -99.785886, 8, "Pretendville", "pvMap", "pv.json", 87)
console.log(pretendVille.name);