<template>
  <div class="flex-col">
    <div class="bg-formPurple rounded-md py-4 px-24 text-white min-w-max font-poppins drop-shadow-solid mb-6">
      <span class="font-semibold">Try it free 7 days</span> then $20/mo. thereafter
    </div>
    <div class="bg-white h-full w-full  p-9 rounded-lg ">
      <form @submit.prevent="handleSubmit" class="flex flex-col">
        <div class="relative">
          <input type="text" placeholder="First Name" class="formInput" v-model="firstName" data-type="firstName">
          <img src="../assets/images/icon-error.svg" class="absolute top-4 right-7 opacity-0">
          <p class="errMsg"></p>
        </div>

        <div class="relative">
          <input type="text" placeholder="Last Name" class="formInput" v-model="lastName" data-type="lastName">
          <img src="../assets/images/icon-error.svg" class="absolute top-4 right-7 opacity-0">
          <p class="errMsg"></p>
        </div>

        <div class="relative">
          <input type="text" placeholder="Email Address" class="formInput" v-model="email" data-type="email">
          <img src="../assets/images/icon-error.svg" class="absolute top-4 right-7 opacity-0">
          <p class="errMsg"></p>
        </div>

        <div class="relative">
          <input type="password" placeholder="Password" class="formInput" v-model="password" data-type="password">
          <img src="../assets/images/icon-error.svg" class="absolute top-4 right-7 opacity-0">
          <p class="errMsg"></p>
        </div>

        <button
          class="bg-formGreen p-3 font-poppins font-semibold text-white rounded-md hover:opacity-90 active:opacity-75 transition-opacity">
          CLAIM
          YOUR FREE TRIAL
        </button>
      </form>

      <p class="text-formGreyishBlue font-poppins font-semibold text-xs text-center mt-4">By clicking the button you are
        agreeing to our <span class="text-formRed cursor-pointer select-none hover:underline">Terms and Services</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let firstName = ref('');
let lastName = ref('');
let email = ref('');
let password = ref('');


function handleSubmit(event) {
  const form = event.target
  const inputs = form.querySelectorAll('.formInput')

  inputs.forEach(input => {
    switch (input.dataset.type) {
      case ('firstName'):
        const FNerrorMsg = 'First Name cannot be empty'
        if (input.value != '') {
          removeErrCSS(input)

        } else {
          addErrCSS(input, FNerrorMsg)
        }
        break;

      case 'lastName':
        const LNerrorMsg = 'Last Name cannot be empty'
        if (input.value != '') {
          removeErrCSS(input)
        } else {
          addErrCSS(input, LNerrorMsg)
        }
        break;
        break;

      case 'email':
        const EMerrorMsg1 = 'Email cannot be empty'
        const EMerrorMsg2 = 'Looks like this is not an email'
        if (input.value != '') {
          if (validateEmail(input.value)) {
            removeErrCSS(input)
          } else {
            addErrCSS(input, EMerrorMsg2)
          }
        } else {
          addErrCSS(input, EMerrorMsg1)
        }
        break;

      case 'password':
        const PerrorMsg1 = 'Password cannot be empty'
        const PerrorMsg2 = 'Password cannot be less than 8 characters'
        if (input.value != '') {
          if (input.value.length > 8) {
            removeErrCSS(input)
          } else {
            addErrCSS(input, PerrorMsg2)
          }
        } else {
          addErrCSS(input, PerrorMsg1)
        }
        break;
    }
  });

}

function validateEmail(mail) {
  const regex = /^[^@]+@\w+(\.\w+)+\w$/;
  return regex.test(mail);
}

function addErrCSS(inputElem, errorMsg) {
  const errMsg = inputElem.parentNode.querySelector('.errMsg')
  const errImg = inputElem.parentNode.querySelector('img')

  errMsg.innerHTML = errorMsg;
  errImg.classList.remove('opacity-0')
  inputElem.classList.add('errInput')
}

function removeErrCSS(inputElem) {
  const errMsg = inputElem.parentNode.querySelector('.errMsg')
  const errImg = inputElem.parentNode.querySelector('img')

  errMsg.innerHTML = '';
  errImg.classList.add('opacity-0')
  inputElem.classList.remove('errInput')
}

</script>

<style></style>