const form = document.getElementById("partnerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "Gửi thành công! Chúng tôi sẽ liên hệ bạn.";
    form.reset();
});