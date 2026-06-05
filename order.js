const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = form.querySelectorAll("input, select");
  let isValid = true;

  fields.forEach((field) => {
    const error = field.nextElementSibling;

    field.classList.remove("input-error");
    if (error && error.classList.contains("error-message")) {
      error.textContent = "";
    }

    if (field.value.trim() === "") {
      isValid = false;
      field.classList.add("input-error");

      if (error && error.classList.contains("error-message")) {
        error.textContent = "يرجى تعبئة هذا الحقل";
      }
    }
  });

  if (!isValid) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="success-modal">
      <div class="success-box" dir="rtl">
        <div class="checkmark">✓</div>
        <h2>🎉 تم استلام طلبك بنجاح</h2>
        <p>
          شكراً لاختيارك مطعم غزة بايتس ❤️
          <br><br>
          تم استلام طلب الحجز الخاص بك بنجاح،
          وسيتم التواصل معك قريباً لتأكيد الحجز والتفاصيل.
        </p>
        <button id="closeModal">حسناً</button>
      </div>
    </div>
  `);

  document.getElementById("closeModal").addEventListener("click", () => {
    document.querySelector(".success-modal").remove();
    window.location.href = "index.html";
  });
});