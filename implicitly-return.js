// https://github.com/AlbertoMontalesi/The-complete-guide-to-modern-JavaScript-from-es2015-to-es2018/blob/master/ebook/02_arrow_functions.md

const race = "100m dash";
const runners = [ "Usain Bolt", "Justin Gatlin", "Asafa Powell" ];

const winner = runners.map((runner, i) =>  ({ name: runner, race, place: i + 1}));

console.log(winner);
// {name: "Usain Bolt", race: "100m dash", place: 1}
// {name: "Justin Gatlin", race: "100m dash", place: 2}
// {name: "Asafa Powell", race: "100m dash", place: 3}
