function showLoginForm(userType) {
    console.log("Clicked:", userType);

    document.getElementById("employeeLogin").classList.add("hidden");
    document.getElementById("employerLogin").classList.add("hidden");

    if (userType === "employee") {
        document.getElementById("employeeLogin").classList.remove("hidden");
    } else if (userType === "employer") {
        document.getElementById("employerLogin").classList.remove("hidden");
    }

    document.getElementById("containerWrapper").classList.add("shifted");
}
