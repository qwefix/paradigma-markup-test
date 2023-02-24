const callbackController = document.getElementById("callback-controller");
const callBackClose = document.getElementById("callback-popup-close");
const callBackContainer = document.getElementById("callback-container");
const callBackPopup = document.getElementById("callback-popup");
const callBackSubmit = document.getElementById("callback-submit-button");

const toggleOpenedCallBack = () => {
  callBackContainer.classList.toggle("opened");
};

callBackContainer.addEventListener("click", toggleOpenedCallBack);
callBackClose.addEventListener("click", toggleOpenedCallBack);
callbackController.addEventListener("click", toggleOpenedCallBack);
callBackPopup.addEventListener("click", (e) => {
  e.stopPropagation();
});

const customCheckboxButton = document.getElementById("custom-checkbox-button");
const callBackCheckbox = document.getElementById("callback-privacy-policy");

let isNumberFilled = false;

const setIsSubmitDisable = () => {
  callBackSubmit.disabled = !(isNumberFilled && callBackCheckbox.checked);
};

callBackCheckbox.addEventListener("change", (e) => {
  const checked = e.target.checked;
  if (checked) {
    customCheckboxButton.classList.add("active");
  } else {
    customCheckboxButton.classList.remove("active");
  }
  setIsSubmitDisable();
});

const callbackPhoneInput = document.getElementById("callback-phone-input");
const phoneMaskOptions = {
  mask: "+{7}(000)000-00-00",
  lazy: false,
};
const callbackPhoneMask = new IMask(callbackPhoneInput, phoneMaskOptions);

callbackPhoneInput.addEventListener("change", (e) => {
  if (e.target.value.includes("_")) {
    isNumberFilled = false;
  } else {
    isNumberFilled = true;
  }
  setIsSubmitDisable();
});

callBackSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  callBackSubmit.classList.add('submitted')
  setTimeout(()=>{
    callBackContainer.classList.remove("opened");
    callBackSubmit.classList.remove('submitted')
  },2000)
});
