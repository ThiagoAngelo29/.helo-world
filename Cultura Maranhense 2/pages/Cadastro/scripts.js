//  Requisicao http post para envio de dados para um servidor

function requisicao() {
	const formElem = document.getElementById(formElem)
	formElem.onsubmit = async (e) => {
		e.preventDefault()

		let response = await fetch('/newsletter', {
			method: 'POST',
			body: new FormData(formElem),
		})

		let result = await response.json()

		alert(result.message)
	}
}

const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}
