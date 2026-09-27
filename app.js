/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {
    clothing: {
        title: "Clothing Website",
        category: "Front-End",
        icon: "🌐",
        description:
            "Website bán quần áo được xây dựng với giao diện hiện đại. Người dùng có thể xem sản phẩm, tìm kiếm và tương tác với các thành phần trên website.",
        tech: "HTML, CSS, JavaScript",
        role: "Front-End Developer",
        time: "2026"
    },

    pickleball: {
        title: "Pickleball Booking",
        category: "Full-Stack",
        icon: "🏓",
        description:
            "Hệ thống quản lý và đặt sân pickleball. Người dùng có thể xem sân, lựa chọn thời gian và thực hiện đặt sân.",
        tech: "React, Node.js, MongoDB",
        role: "Full-Stack Developer",
        time: "2026"
    },

    hrm: {
        title: "HR Management System",
        category: "Back-End",
        icon: "💼",
        description:
            "Hệ thống quản lý nhân sự hỗ trợ quản lý thông tin nhân viên, chấm công, tăng ca và tính lương.",
        tech: "Java, JSP, Servlet, SQL Server",
        role: "Back-End Developer",
        time: "2026"
    },

    recipe: {
        title: "Recipe App",
        category: "Front-End",
        icon: "🍳",
        description:
            "Ứng dụng công thức nấu ăn cho phép người dùng xem danh sách và thông tin chi tiết các món ăn.",
        tech: "React, JavaScript, REST API",
        role: "Front-End Developer",
        time: "2026"
    }
};


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* Đóng menu khi click vào một link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Xóa active ở tất cả button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Active button hiện tại
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(function (card) {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


/* =====================================================
   PROJECT MODAL
===================================================== */

const modal = document.getElementById("projectModal");

const modalClose = document.getElementById("modalClose");

const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const modalTech = document.getElementById("modalTech");
const modalRole = document.getElementById("modalRole");
const modalTime = document.getElementById("modalTime");


/* Các nút "Xem chi tiết" */

const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectId = button.getAttribute("data-project");

        const project = projects[projectId];

        if (!project) {
            return;
        }

        // Đưa dữ liệu project vào modal
        modalIcon.textContent = project.icon;
        modalCategory.textContent = project.category;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modalTech.textContent = project.tech;
        modalRole.textContent = project.role;
        modalTime.textContent = project.time;

        // Hiện modal
        modal.classList.add("show");

        // Không cho scroll background
        document.body.style.overflow = "hidden";
    });

});


/* Đóng modal */

modalClose.addEventListener("click", closeModal);


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";
}


/* Click ra ngoài modal */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        closeModal();
    }

});


/* Nhấn ESC để đóng */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Không reload trang
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    alert(
        "Cảm ơn " +
        name +
        "! Tin nhắn của bạn đã được gửi."
    );

    // Xóa form
    contactForm.reset();

});