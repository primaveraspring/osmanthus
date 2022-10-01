const a = [];
const b = [];
const c = [];
document.querySelectorAll('.col_a > div').forEach(x => a.push(x.innerHTML));
document.querySelectorAll('.col_b > div').forEach(x => b.push(x.innerHTML));
a.forEach((x,i) => c.push({kana: x, meaning: b[i]}));
