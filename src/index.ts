if (typeof document !== "undefined") {
	const observer = new IntersectionObserver((entries) => {
		const fingerDown: HTMLElement = document.body
			?.querySelector("header")
			?.querySelector("#finger-down")!
		if (entries[0].isIntersecting && fingerDown) {
			fingerDown.style["transition"] = "250ms"
			fingerDown.style["opacity"] = "0"
		} else if (!entries[0].isIntersecting && fingerDown) {
			fingerDown.style["transition"] = "250ms"
			fingerDown.style["opacity"] = "1"
		}
	})

	observer.observe(document.querySelector("main")!)
}
