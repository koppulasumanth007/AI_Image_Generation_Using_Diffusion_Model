const key = "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";
const inputText = document.getElementById("input");
const image = document.getElementById("image");
const GenBtn = document.getElementById("btn");

async function query(data) {
	const response = await fetch(
		"https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${key}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputText.value}),
		}
	);
	const result = await response.blob();
	return result;
}

async function generate(){
    query().then((response) => {
        // Use image
		// const objUrl = "./ball.svg";
		image.src = "./ball.svg";
        const objUrl = URL.createObjectURL(response);
        image.src = objUrl;
    });
}

GenBtn.addEventListener("click", () => {
    generate();
    alert("Please wait...");
});
