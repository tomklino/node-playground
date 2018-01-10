function talk() {
  console.log(this.sound);
}

let human = {
  speak: talk,
  sound: "hahaha"
}
human.work = function(cb) {
  cb.bind(human)();
}

human.work(function() {
  console.log(this.sound); //hahaha
});

human.work(() => {
  console.log(this.sound); //undefined
})
