const creature = {
    picture: 'owlbear.webp',
    name: "Owlbear",
    class: "Class: Beast of prey",
    level: 1,
    health: 150,
    makeAttack: function () {

        if (this.health > 0){
            this.health -= 10
        }      
        else{
            alert("Owlbear is dead T-T")
        } 
    },
    leveUp: function () {
        this.level += 1
    }
};

let picture = document.querySelector('#image');
picture.setAttribute("src", creature.picture);
picture.setAttribute("alt", "Owlbear picture");
document.querySelector("#name").textContent = creature.name;
document.querySelector("#class").textContent = creature.class;

let level = document.querySelector("#level");
level.textContent = `Level: ${creature.level}`;
let health = document.querySelector("#health");
health.textContent = `Health: ${creature.health}`;

document.querySelector("#attackButton").addEventListener("click", function () {
    creature.makeAttack();
    health.textContent = `Health: ${creature.health}`;
});
document.querySelector("#levelUpButton").addEventListener("click", function () {
    creature.leveUp();
    level.textContent = `Level: ${creature.level}`;
});