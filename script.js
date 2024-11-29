// Get references to elements with appropriate types
var btn = document.getElementById("submitForm");
var toggler = document.getElementById('toggler');
var userform = document.getElementById('userForm');
var imgOut = document.getElementById('profile-pic');
var inputImg = document.getElementById("profilePic");
var outProfile = document.getElementById("profile-img");
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
        var output = document.getElementById("output");
        var nameField = document.getElementById("name");
        var professionField = document.getElementById("profession");
        var contactField = document.getElementById("contactNumber");
        var emailField = document.getElementById("email");
        var addressField = document.getElementById("address");
        var websiteField = document.getElementById("website");
        var hobby1Field = document.getElementById("hobby1");
        var hobby2Field = document.getElementById("hobby2");
        var hobby3Field = document.getElementById("hobby3");
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
            document.getElementById("outName").textContent = nameField.value;
        }
        if (professionField) {
            document.getElementById("professionOut").textContent = professionField.value;
        }
        // Contact Details
        if (contactField) {
            document.getElementById("cont-no").innerHTML = "<i class=\"bx bx-mobile\"></i> ".concat(contactField.value);
        }
        if (emailField) {
            document.getElementById("emailOut").innerHTML = "<i class=\"bx bx-envelope\"></i> ".concat(emailField.value);
        }
        if (addressField) {
            document.getElementById("addressOut").innerHTML = "<i class=\"bx bx-location-plus\"></i> ".concat(addressField.value);
        }
        if (websiteField) {
            document.getElementById("webOut").innerHTML = "<i class=\"bx bx-globe\"></i> ".concat(websiteField.value);
        }
        // Hobbies
        if (hobby1Field) {
            document.getElementById("hobby-1").textContent = hobby1Field.value;
        }
        if (hobby2Field) {
            document.getElementById("hobby-2").textContent = hobby2Field.value;
        }
        if (hobby3Field) {
            document.getElementById("hobby-3").textContent = hobby3Field.value;
        }
        // Education
        var eduYear = [
            document.getElementById("edu1"),
            document.getElementById("edu2"),
            document.getElementById("edu3")
        ];
        var eduLeft = document.querySelectorAll(".education .left p");
        eduYear.forEach(function (field, index) {
            if (field && eduLeft[index]) {
                eduLeft[index].textContent = field.value;
            }
        });
        var eduFields = [
            document.getElementById("edu4"),
            document.getElementById("edu5"),
            document.getElementById("edu6")
        ];
        var eduElements = document.querySelectorAll(".education .right h2");
        eduFields.forEach(function (field, index) {
            if (field && eduElements[index]) {
                eduElements[index].textContent = field.value;
            }
        });
        // Experience
        var expYear = [
            document.getElementById("exp1"),
            document.getElementById("exp2"),
            document.getElementById("exp3")
        ];
        var expLeft = document.querySelectorAll(".experience .left p");
        expYear.forEach(function (field, index) {
            if (field && expLeft[index]) {
                expLeft[index].textContent = field.value;
            }
        });
        var expFields = [
            document.getElementById("exp4"),
            document.getElementById("exp5"),
            document.getElementById("exp6")
        ];
        var expElements = document.querySelectorAll(".experience .right h2");
        expFields.forEach(function (field, index) {
            if (field && expElements[index]) {
                expElements[index].textContent = field.value;
            }
        });
        // Skills
        var skillLeft = [
            document.getElementById("skill1"),
            document.getElementById("skill2"),
            document.getElementById("skill3")
        ];
        var skillLeftS = document.querySelectorAll(".skills .left p");
        skillLeft.forEach(function (field, index) {
            if (field && skillLeftS[index]) {
                skillLeftS[index].textContent = field.value;
            }
        });
        var skillFields = [
            document.getElementById("skill4"),
            document.getElementById("skill5"),
            document.getElementById("skill6")
        ];
        var skillElements = document.querySelectorAll(".skills .right p");
        skillFields.forEach(function (field, index) {
            if (field && skillElements[index]) {
                skillElements[index].textContent = field.value;
            }
        });
    });
}
