

const carros = [
	{
    name: 'opala',
    aro: 17,
    cor: 'blue',
    foto: 'https://i.pinimg.com/originals/7f/2f/47/7f2f47aedee1bea77be0edca74a9638e.jpg'
  },
  {
    name: 'celta',
    aro: 14,
    cor: '#000000',
    foto: 'https://cdn.grupolance.com.br/batches/5e/17222/4e487c60b3d30c301e59e3581fd8d977_thumb.jpg',
  },
  {
    name: 'corsa',
    aro: 15,
    cor: '#f2f2f2',
    foto: 'https://www.popularveiculos.com.br/carros/4b36cefcc558024afd0969e224f1355c-thumbjpeg-chevrolet-corsa-8847765-800-600-70.jpg'
  }
]

function container() {
	const $container = document.createElement('div')
  $container.className = 'container'

	carros.forEach((cars) => {
		const card = document.createElement('div');
		card.classList = 'card-body';
	
		const component = `
			<div class="card">
				<p class="card-name">${cars.name}</p>
				<img src="${cars.foto}" alt="${cars.name}" width="100%">
					<div class="description">
					<p>Descrição</p>
					<p>Aro: ${cars.aro}</p>
					<p>Cor: </p>
					<button class="card-color" style="background-color: ${cars.cor}"></button>
				</div>
			</div>
		`;
	
		$container.innerHTML += component;
	})

	return $container
} 

document.body.appendChild(container())






