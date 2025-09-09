document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("contactName");
    const email = formData.get("contactEmail");
    const message = formData.get("contactMessage");

    const body = {
      template: "contacto-generico",
      origen_name: "gea-s-r-l",
      campania_name: "prueba",
      data: {
        nombre: name,
        email: email,
        mensaje: message,
        subject: "Nuevo mensaje de contacto",
      },
    };

    fetch("https://sistemajudi.online/api/api/emails/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          alert("Correo electrónico enviado correctamente");
          form.reset();
        } else {
          throw new Error(res.error || "Error desconocido");
        }
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert(
          "Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde."
        );
      });
  });
});
