// main.js - interactive features for K-Plumbing (loaded on every page).
// Each block first checks that its elements exist, because one file is shared by all pages.

// 1. Mobile menu button
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// 2. Dynamic content: testimonials are stored in an array and shown one at a time
const testimonialText = document.getElementById("testimonialText");

if (testimonialText) {
  const testimonials = [
    { text: "K-Plumbing arrived within the hour and fixed our burst geyser the same day.", who: "Local homeowner" },
    { text: "They found a hidden leak two other plumbers missed and our water bill dropped.", who: "Homeowner, Moreleta Park" },
    { text: "Quote came the same morning and the bathroom re-pipe was finished on schedule.", who: "Small business owner, Pretoria East" }
  ];
  const testimonialWho = document.getElementById("testimonialWho");
  let current = 0;

  function showTestimonial(index) {
    current = (index + testimonials.length) % testimonials.length;   // wraps round at both ends
    testimonialText.textContent = "\u201C" + testimonials[current].text + "\u201D";
    testimonialWho.textContent = testimonials[current].who;
  }

  document.getElementById("testimonialPrev").addEventListener("click", function () { showTestimonial(current - 1); });
  document.getElementById("testimonialNext").addEventListener("click", function () { showTestimonial(current + 1); });
  showTestimonial(0);
}

// 3. Search feature: filter the services as the user types
const serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {
  const serviceItems = document.querySelectorAll(".service-item");
  const searchStatus = document.getElementById("searchStatus");

  serviceSearch.addEventListener("input", function () {
    const term = serviceSearch.value.trim().toLowerCase();
    let visible = 0;

    serviceItems.forEach(function (item) {
      const text = (item.textContent + " " + item.dataset.keywords).toLowerCase();
      const isMatch = text.includes(term);
      item.hidden = !isMatch;
      if (isMatch) { visible++; }
    });

     if (term === "") {
      searchStatus.textContent = "";
    } else if (visible === 0) {
      searchStatus.textContent = "No services match \u201C" + term + "\u201D. Try \u201Cgeyser\u201D, \u201Cdrain\u201D or \u201Cleak\u201D.";
    } else {
      searchStatus.textContent = visible + (visible === 1 ? " service found." : " services found.");
    }
  });
}

// 4. Interactive map: the buttons switch the Google Map between the two branches
const mapFrame = document.getElementById("mapFrame");

if (mapFrame) {
  const mapButtons = document.querySelectorAll(".map-btn");

  mapButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      mapFrame.src = button.dataset.src;
      mapFrame.title = "Map of the " + button.textContent + " branch";
      mapButtons.forEach(function (b) { b.setAttribute("aria-pressed", b === button); });
    });
  });
}

// 5. Gallery lightbox: click a photo to enlarge it (arrows or arrow keys to browse, Esc to close)
const galleryImages = Array.from(document.querySelectorAll(".gallery-grid img"));
const lightbox = document.getElementById("lightbox");

if (lightbox && galleryImages.length > 0) {
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  let index = 0;

  function openLightbox(i) {
    index = (i + galleryImages.length) % galleryImages.length;
    const img = galleryImages[index];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.closest("figure").querySelector("figcaption").textContent +
      " (" + (index + 1) + " of " + galleryImages.length + ")";
    lightbox.hidden = false;
    document.getElementById("lbClose").focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    galleryImages[index].focus();
  }
 galleryImages.forEach(function (img, i) {
    img.tabIndex = 0;                                   // lets keyboard users reach each photo
    img.setAttribute("role", "button");
    img.addEventListener("click", function () { openLightbox(i); });
    img.addEventListener("keydown", function (event) { if (event.key === "Enter") { openLightbox(i); } });
  });

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function () { openLightbox(index - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { openLightbox(index + 1); });
  lightbox.addEventListener("click", function (event) { if (event.target === lightbox) { closeLightbox(); } });

  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) { return; }
    if (event.key === "Escape") { closeLightbox(); }
    if (event.key === "ArrowLeft") { openLightbox(index - 1); }
    if (event.key === "ArrowRight") { openLightbox(index + 1); }
  });
}


// validation.js - validation for the Get a Quote (enquiry) and Contact forms.
// Pattern from the WEDE5020 notes: read values -> test rules -> show/clear errors -> stop if invalid.

const EMAIL_TO = "pretoria@kplumbing.co.za";

// ---------- Helper functions (showError / clearError from the notes, plus the field's CSS class) ----------
function showError(input, errorElement, message) {
  errorElement.textContent = message;
  if (input) {
    input.classList.add("error-input");
    input.classList.remove("success-input");
    input.setAttribute("aria-invalid", "true");
  }
}

function clearError(input, errorElement) {
  errorElement.textContent = "";
  if (input) {
    input.classList.remove("error-input");
    input.classList.add("success-input");
    input.removeAttribute("aria-invalid");
  }
}

// Shared rules used by BOTH forms. Each returns true (valid) or false (invalid).
function checkName(input, errorElement) {
  const name = input.value.trim();
  if (name === "") {
    showError(input, errorElement, "Full name is required");
    return false;
  } else if (name.length < 3) {
    showError(input, errorElement, "Name must have at least 3 characters");
    return false;
  } else if (!/^[A-Za-z][A-Za-z\s'.\-]*$/.test(name)) {
    showError(input, errorElement, "Use letters only (no numbers or symbols)");
    return false;
  }
  clearError(input, errorElement);
  return true;
}

function checkEmail(input, errorElement) {
  const email = input.value.trim();
  if (email === "") {
    showError(input, errorElement, "Email is required");
    return false;
  } else if (!input.checkValidity()) {                  // type="email" gives the browser's own format rule
    showError(input, errorElement, "Enter a valid email address, e.g. name@example.com");
    return false;
  }
  clearError(input, errorElement);
  return true;
}

function checkPhone(input, errorElement, isRequired) {
  const phone = input.value.trim();
  if (phone === "") {
    if (isRequired) {
      showError(input, errorElement, "Phone number is required");
      return false;
    }
    clearError(input, errorElement);                    // optional and empty: nothing to check
    input.classList.remove("success-input");
    return true;
  }
  const digits = phone.replace(/[\s\-()]/g, "");        // ignore spaces, dashes and brackets
  if (!/^(0\d{9}|\+27\d{9})$/.test(digits)) {          // 0821234567 or +27821234567
    showError(input, errorElement, "Enter a valid SA number, e.g. 082 123 4567 or +27 82 123 4567");
    return false;
  }
  clearError(input, errorElement);
  return true;
}

function checkSelect(input, errorElement, message) {
  if (input.value === "") {                             // the first option has an empty value
    showError(input, errorElement, message);
    return false;
  }
  clearError(input, errorElement);
  return true;
}

function checkText(input, errorElement, label, minLength, maxLength) {
  const text = input.value.trim();
  if (text === "") {
    showError(input, errorElement, label + " is required");
    return false;
  } else if (text.length < minLength) {
    showError(input, errorElement, label + " must have at least " + minLength + " characters");
    return false;
  } else if (text.length > maxLength) {
    showError(input, errorElement, label + " must be " + maxLength + " characters or fewer");
    return false;
  }
  clearError(input, errorElement);
  return true;
}

// Live feedback: once a field shows an error, re-check it while the user types so the error clears as soon as it is fixed
function liveCheck(input, checkFunction) {
  input.addEventListener("input", function () {
    if (input.classList.contains("error-input")) { checkFunction(); }
  });
  input.addEventListener("change", function () {
    if (input.classList.contains("error-input")) { checkFunction(); }
  });
}

// Shows the response message under the form (green for success, red for failure)
function showResult(box, lines, isError) {
  box.hidden = false;
  box.classList.toggle("form-error", isError);
  box.innerHTML = "";
  lines.forEach(function (line) {
    const p = document.createElement("p");
    p.textContent = line;
    box.appendChild(p);
  });
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Opens the visitor's email app with the message already filled in (mailto)
function sendEmail(subject, fields) {
  const body = Object.keys(fields).map(function (key) { return key + ": " + fields[key]; }).join("\n");
  window.location.href = "mailto:" + EMAIL_TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

function resetForm(form) {
  form.reset();
  form.querySelectorAll(".success-input").forEach(function (el) { el.classList.remove("success-input"); });
}

// ============================ GET A QUOTE (enquiry) ============================
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  const nameInput = document.getElementById("enqName");
  const emailInput = document.getElementById("enqEmail");
  const phoneInput = document.getElementById("enqPhone");
  const serviceInput = document.getElementById("enqService");
  const detailsInput = document.getElementById("enqDetails");
  const termsInput = document.getElementById("enqTerms");

  const nameError = document.getElementById("enqNameError");
  const emailError = document.getElementById("enqEmailError");
  const phoneError = document.getElementById("enqPhoneError");
  const serviceError = document.getElementById("enqServiceError");
  const propertyError = document.getElementById("enqPropertyError");
  const detailsError = document.getElementById("enqDetailsError");
  const termsError = document.getElementById("enqTermsError");
  const result = document.getElementById("enqResult");

  // Rules that only this form has
  function checkProperty() {
    const selected = document.querySelector('input[name="property"]:checked');   // radio buttons
    if (!selected) {
      showError(null, propertyError, "Choose a property type");
      return false;
    }
    clearError(null, propertyError);
    return true;
  }

  function checkTerms() {
    if (!termsInput.checked) {                                                   // checkbox
      showError(null, termsError, "You must agree before we can contact you");
      return false;
    }
    clearError(null, termsError);
    return true;
  }

  const runName = function () { return checkName(nameInput, nameError); };
  const runEmail = function () { return checkEmail(emailInput, emailError); };
  const runPhone = function () { return checkPhone(phoneInput, phoneError, true); };
  const runService = function () { return checkSelect(serviceInput, serviceError, "Please select a service"); };
  const runDetails = function () { return checkText(detailsInput, detailsError, "Problem description", 10, 500); };

  liveCheck(nameInput, runName);
  liveCheck(emailInput, runEmail);
  liveCheck(phoneInput, runPhone);
  liveCheck(serviceInput, runService);
  liveCheck(detailsInput, runDetails);
  document.querySelectorAll('input[name="property"]').forEach(function (radio) { radio.addEventListener("change", checkProperty); });
  termsInput.addEventListener("change", checkTerms);

  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();          // no page reload: this page shows the response itself
    result.hidden = true;

    let isValid = true;
    // Every rule runs (no short-circuit) so ALL the errors show at once
    if (!runName()) { isValid = false; }
    if (!runEmail()) { isValid = false; }
    if (!runPhone()) { isValid = false; }
    if (!runService()) { isValid = false; }
    if (!checkProperty()) { isValid = false; }
    if (!runDetails()) { isValid = false; }
    if (!checkTerms()) { isValid = false; }

    if (!isValid) {
      const firstBad = enquiryForm.querySelector(".error-input");
      if (firstBad) { firstBad.focus(); }
      return;
    }

    // Valid: show the response and open the email
    const reference = "KP-" + Date.now().toString().slice(-6);
    const serviceText = serviceInput.options[serviceInput.selectedIndex].text;
    const firstName = nameInput.value.trim().split(" ")[0];
    const fields = {
      Reference: reference,
      Name: nameInput.value.trim(),
      Email: emailInput.value.trim(),
      Phone: phoneInput.value.trim(),
      Service: serviceText,
      "Property type": document.querySelector('input[name="property"]:checked').value,
      Details: detailsInput.value.trim()
    };

    showResult(result, [
      "Thank you, " + firstName + "! Your quote request has been captured.",
      "Reference: " + reference + " | Service: " + serviceText,
      "Your email app should now open. Press Send to deliver the request to us."
    ], false);
    sendEmail("Quote request " + reference + " - " + serviceText, fields);
    resetForm(enquiryForm);
  });
}

// ================================== CONTACT ==================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameInput = document.getElementById("conName");
  const emailInput = document.getElementById("conEmail");
  const phoneInput = document.getElementById("conPhone");
  const reasonInput = document.getElementById("conReason");
  const messageInput = document.getElementById("conMessage");
  const copyInput = document.getElementById("conCopy");

  const nameError = document.getElementById("conNameError");
  const emailError = document.getElementById("conEmailError");
  const phoneError = document.getElementById("conPhoneError");
  const reasonError = document.getElementById("conReasonError");
  const messageError = document.getElementById("conMessageError");
  const result = document.getElementById("conResult");

  const runName = function () { return checkName(nameInput, nameError); };
  const runEmail = function () { return checkEmail(emailInput, emailError); };
  const runPhone = function () { return checkPhone(phoneInput, phoneError, false); };   // phone is optional here
  const runReason = function () { return checkSelect(reasonInput, reasonError, "Please choose a reason for contacting us"); };
  const runMessage = function () { return checkText(messageInput, messageError, "Message", 10, 500); };

  liveCheck(nameInput, runName);
  liveCheck(emailInput, runEmail);
  liveCheck(phoneInput, runPhone);
  liveCheck(reasonInput, runReason);
  liveCheck(messageInput, runMessage);

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    result.hidden = true;

    let isValid = true;
    if (!runName()) { isValid = false; }
    if (!runEmail()) { isValid = false; }
    if (!runPhone()) { isValid = false; }
    if (!runReason()) { isValid = false; }
    if (!runMessage()) { isValid = false; }

    if (!isValid) {
      const firstBad = contactForm.querySelector(".error-input");
      if (firstBad) { firstBad.focus(); }
      return;
    }

    const reasonText = reasonInput.options[reasonInput.selectedIndex].text;
    const firstName = nameInput.value.trim().split(" ")[0];
    const fields = {
      Name: nameInput.value.trim(),
      Email: emailInput.value.trim(),
      Phone: phoneInput.value.trim() || "(not given)",
      Reason: reasonText,
      Message: messageInput.value.trim(),
      "Wants a copy": copyInput.checked ? "Yes" : "No"
    };

    showResult(result, [
      "Thanks " + firstName + ", your message is ready to send.",
      "Your email app should now open. Press Send to deliver it to us."
    ], false);
    sendEmail("Website message: " + reasonText, fields);
    resetForm(contactForm);
  });
}
