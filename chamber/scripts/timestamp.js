    const form = document.querySelector("form");
    const timestampInput = document.querySelector("#timestamp");

    form.addEventListener("submit", () => {
        const now = new Date();
        timestampInput.value = now.toISOString(); 
    });

