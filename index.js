var rateButton = document.querySelectorAll("button")
for (var i = 0; i < rateButton.length; i++) {

    rateButton[i].addEventListener("click", function handleClick() {

        var rateNumber = this.innerHTML
        switch (rateNumber) {
            case "1":
                this.style.backgroundColor = "hsl(217, 12%, 63%)";
                this.style.color = "white";
                document.querySelector("span").textContent = rateNumber;
                break;

            case "2":
                this.style.backgroundColor = "hsl(217, 12%, 63%)";
                this.style.color = "white";
                document.querySelector("span").textContent = rateNumber;
                break;

            case "3":
                this.style.backgroundColor = "hsl(217, 12%, 63%)";
                this.style.color = "white";
                document.querySelector("span").textContent = rateNumber;
                break;

            case "4":
                this.style.backgroundColor = "hsl(217, 12%, 63%)";
                this.style.color = "white";
                document.querySelector("span").textContent = rateNumber;
                break;

            case "5":
                this.style.backgroundColor = "hsl(217, 12%, 63%)";
                this.style.color = "white";
                document.querySelector("span").textContent = rateNumber;
                break;
            case "Submit":
                document.getElementById("no-2").removeAttribute("hidden")
                document.getElementById("no-1").setAttribute("hidden", "hidden")
            default:
                console(rateNumber)
                break;
        }
    });
}
