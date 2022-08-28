const input = document.querySelectorAll(".controls input");

const handleInput = () => {
  const suff = this.dataset.name;
  console.log(suff)
}

input.forEach(item => item.addEventListener('mousemove', handleInput));

input.forEach(item => item.addEventListener('change', handleInput));
