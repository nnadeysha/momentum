//FORM


export class TicketForm {
  constructor(parent) {
    const form = parent.querySelector(".form-wrapper");
    this.form =form;
    this.parent =parent;
    const closeBtn = form.querySelector(".form-close-button");
    const bookBtn = form.querySelector(".booking-button");
    const seniorTypeTicketForm = form.querySelector(".senior-form");
    const basicTypeTicketForm = form.querySelector(".basic-form");
    const totalForm = form.querySelector(".total-sum-form");
    const inputsTicketsForm = form.querySelectorAll("#tickets-buy-input");
    const radioTypeForm = form.querySelectorAll('input[type="radio"]');

    const ripple = document.createElement("div");
    ripple.classList.add("ripple");

    ripple.style.display = "none";
    bookBtn.prepend(ripple);

    totalForm.innerHTML = `Total: €${parseFloat(
      localStorage.getItem("Total")
    )}`;
    seniorTypeTicketForm.value = parseFloat(
      localStorage.getItem("seniorTypeTicket")
    );

    bookBtn.addEventListener("click", (e) => {
      const left = e.clientX - e.target.getBoundingClientRect().left;
      const top = e.clientY - e.target.getBoundingClientRect().top;
      ripple.style.left = `${left}px`;
      ripple.style.top = `${top}px`;
      ripple.style.display = "";
    });

    bookBtn.addEventListener("mouseleave", () => {
      /* bookBtn.removeChild(ripple); */
      ripple.style.display = "none";
    });

    

    closeBtn.addEventListener("click", () => this.hide());
  }
  show() {
    this.parent.style.display = "block";
    setTimeout(() => {
      this.form.classList.toggle("active");
    }, 100);
  }
  hide() {
    this.form.ontransitionend = () => {
      this.parent.style.display = "none";
      this.form.ontransitionend = null
    };
    this.form.classList.remove("active");
  }
}
/* new TicketForm(overlay); */
