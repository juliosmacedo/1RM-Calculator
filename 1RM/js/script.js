

function calculate1RM(w, r){
    const rmEp = Math.round((1+r/30) * w);
    const rmGlo = Math.round(100*w / (101.3 - 2.67123*r));
    const rmLom = Math.round(Math.pow(r, 0.1)*w);
  if (r === 0) {
    return 0
  } else if (r === 1) {
    return w
  } else {   
    let allRms = [];
    allRms = allRms.concat(rmGlo).concat(rmLom).concat(rmEp)
    const largest = Math.max(...allRms)
      return largest
    }

}

const btn = document.getElementById("button");
btn.onclick = function submit() {
  const weight = document.getElementById("lift").value
  const reps = document.getElementById("reps").value
  calculate1RM(weight, reps)
  document.getElementById('info').innerHTML = `<h3><strong>You can lift ${calculate1RM(weight, reps)}kg in one rep!</strong></h3>`
}


