// Get references to elements with appropriate types
const btn = document.getElementById("submitForm") as HTMLButtonElement | null;
const toggler = document.getElementById('toggler') as HTMLButtonElement | null;
const userform = document.getElementById('userForm') as HTMLElement | null;
const imgOut = document.getElementById('profile-pic') as HTMLImageElement | null;

let inputImg = document.getElementById("profilePic") as HTMLInputElement | null;
let outProfile = document.getElementById("profile-img") as HTMLImageElement | null;

if (inputImg) {
    inputImg.addEventListener("change", function () {
        if (inputImg.files && inputImg.files[0]) {
            
            if (outProfile) {
                outProfile.src = URL.createObjectURL(inputImg.files[0]);
            }
        }
    });
}

if (btn) {
    btn.addEventListener("click", function () {
        const output = document.getElementById("output") as HTMLElement | null;
        const nameField = document.getElementById("name") as HTMLInputElement | null;
        const professionField = document.getElementById("profession") as HTMLInputElement | null;
        const contactField = document.getElementById("contactNumber") as HTMLInputElement | null;
        const emailField = document.getElementById("email") as HTMLInputElement | null;
        const addressField = document.getElementById("address") as HTMLInputElement | null;
        const websiteField = document.getElementById("website") as HTMLInputElement | null;
        const hobby1Field = document.getElementById("hobby1") as HTMLInputElement | null;
        const hobby2Field = document.getElementById("hobby2") as HTMLInputElement | null;
        const hobby3Field = document.getElementById("hobby3") as HTMLInputElement | null;

        if (output) {
            output.classList.remove("hidden");
        }

        if (userform) {
            userform.style.display = 'none';
        }

        // Profile Section
        if (inputImg && outProfile) {
            outProfile.src = URL.createObjectURL(inputImg.files[0]);
        }
        if (nameField) {
            document.getElementById("outName")!.textContent = nameField.value;
        }
        if (professionField) {
            document.getElementById("professionOut")!.textContent = professionField.value;
        }

        // Contact Details
        if (contactField) {
            document.getElementById("cont-no")!.innerHTML = `<i class="bx bx-mobile"></i> ${contactField.value}`;
        }
        if (emailField) {
            document.getElementById("emailOut")!.innerHTML = `<i class="bx bx-envelope"></i> ${emailField.value}`;
        }
        if (addressField) {
            document.getElementById("addressOut")!.innerHTML = `<i class="bx bx-location-plus"></i> ${addressField.value}`;
        }
        if (websiteField) {
            document.getElementById("webOut")!.innerHTML = `<i class="bx bx-globe"></i> ${websiteField.value}`;
        }

        // Hobbies
        if (hobby1Field) {
            document.getElementById("hobby-1")!.textContent = hobby1Field.value;
        }
        if (hobby2Field) {
            document.getElementById("hobby-2")!.textContent = hobby2Field.value;
        }
        if (hobby3Field) {
            document.getElementById("hobby-3")!.textContent = hobby3Field.value;
        }

        // Education
        const eduYear: (HTMLInputElement | null)[] = [
            document.getElementById("edu1") as HTMLInputElement | null,
            document.getElementById("edu2") as HTMLInputElement | null,
            document.getElementById("edu3") as HTMLInputElement | null
        ];
        const eduLeft = document.querySelectorAll(".education .left p");
        eduYear.forEach((field, index) => {
            if (field && eduLeft[index]) {
                eduLeft[index].textContent = field.value;
            }
        });

        const eduFields: (HTMLInputElement | null)[] = [
            document.getElementById("edu4") as HTMLInputElement | null,
            document.getElementById("edu5") as HTMLInputElement | null,
            document.getElementById("edu6") as HTMLInputElement | null
        ];
        const eduElements = document.querySelectorAll(".education .right h2");
        eduFields.forEach((field, index) => {
            if (field && eduElements[index]) {
                eduElements[index].textContent = field.value;
            }
        });

        // Experience
        const expYear: (HTMLInputElement | null)[] = [
            document.getElementById("exp1") as HTMLInputElement | null,
            document.getElementById("exp2") as HTMLInputElement | null,
            document.getElementById("exp3") as HTMLInputElement | null
        ];
        const expLeft = document.querySelectorAll(".experience .left p");
        expYear.forEach((field, index) => {
            if (field && expLeft[index]) {
                expLeft[index].textContent = field.value;
            }
        });

        const expFields: (HTMLInputElement | null)[] = [
            document.getElementById("exp4") as HTMLInputElement | null,
            document.getElementById("exp5") as HTMLInputElement | null,
            document.getElementById("exp6") as HTMLInputElement | null
        ];
        const expElements = document.querySelectorAll(".experience .right h2");
        expFields.forEach((field, index) => {
            if (field && expElements[index]) {
                expElements[index].textContent = field.value;
            }
        });

        // Skills
        const skillLeft: (HTMLInputElement | null)[] = [
            document.getElementById("skill1") as HTMLInputElement | null,
            document.getElementById("skill2") as HTMLInputElement | null,
            document.getElementById("skill3") as HTMLInputElement | null
        ];
        const skillLeftS = document.querySelectorAll(".skills .left p");
        skillLeft.forEach((field, index) => {
            if (field && skillLeftS[index]) {
                skillLeftS[index].textContent = field.value;
            }
        });

        const skillFields: (HTMLInputElement | null)[] = [
            document.getElementById("skill4") as HTMLInputElement | null,
            document.getElementById("skill5") as HTMLInputElement | null,
            document.getElementById("skill6") as HTMLInputElement | null
        ];
        const skillElements = document.querySelectorAll(".skills .right p");
        skillFields.forEach((field, index) => {
            if (field && skillElements[index]) {
                skillElements[index].textContent = field.value;
            }
        });
    });
}

