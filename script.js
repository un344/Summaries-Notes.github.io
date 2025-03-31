
// ✅ رسالة ترحيب عند تحميل الصفحة لأول مرة
window.onload = function () {
    if (!sessionStorage.getItem("visited")) {
        alert("Welcome to UnKnown 🚀");
        sessionStorage.setItem("visited", true);
    }
};

// ✅ زر لتغيير الوضع الليلي/النهاري
function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");

    // حفظ الوضع المختار في التخزين المحلي
    let theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // تغيير نص الزر
    let button = document.getElementById("themeButton");
    button.textContent = theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode";
}

// ✅ تطبيق الوضع الليلي إذا كان مفعلًا مسبقًا
document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeButton").textContent = "🌞 Light Mode";
    }

    // تأثير عند تحريك الفأرة فوق المواد الدراسية
    let subjects = document.querySelectorAll(".subject");
    subjects.forEach(subject => {
        subject.addEventListener("mouseover", function () {
            subject.style.transform = "scale(1.08)";
            subject.style.transition = "0.3s ease-in-out";
        });

        subject.addEventListener("mouseleave", function () {
            subject.style.transform = "scale(1)";
        });
    });
});

