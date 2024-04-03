<script setup lang="ts">
import {ref} from "vue";
import {useSidebar} from "@/service/useSidebar"
import i18n from "@/plugins/i18n";
import {useI18n} from 'vue-i18n';
import {watch} from 'vue';
import {Icon} from '@iconify/vue';
import {useThemeStore} from "@/stores/theme";

const {isOpen} = useSidebar()
const notificationOpen = ref(false);
const {locale} = useI18n();

const dropdownOpen = ref(false);

const logout = () => {
  localStorage.clear();
}

const lang: any = ref(localStorage.getItem('lang') || 'Uzbekcha');
const languages = [
  {value: 'uz', label: 'Uzbekcha', icon: 'emojione:flag-for-uzbekistan'},
  {value: 'eng', label: "English", icon: 'emojione:flag-for-united-states'},
  {value: 'ru', label: "Russkiy", icon: "emojione:flag-for-russia"}
];

const selectLanguages = () => {
  i18n.global.locale = lang.value
  localStorage.setItem('lang', lang.value)
}

watch(locale, (newlocale) => {
  localStorage.setItem("lang", newlocale);
});

const theme = useThemeStore();
const changeTheme = () => {

  theme.$subscribe(() => {
    theme.toggleTheme();
  });

  theme.darkMode = !theme.darkMode
}

const isActive = ref(false);
const changeDarkLight = () => {
  isActive.value = true;
}

</script>
<template>
  <header class=" flex
      items-center
      justify-between
      px-6
      py-2
      border-b border-br-1 
">
    <div class="flex items-center">
      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="flex items-center gap-[10px]">
      <a-select style="width: 130px" v-model:value="locale" @change="selectLanguages">
        <a-select-option v-for="language in languages" :value="language.value">
          <div class="flex items-center align-center gap-[2px]">
            <Icon :icon="language.icon" width="20px " height="20px"/>
            <span>{{ language.label }}</span>
          </div>
        </a-select-option>
      </a-select>

      <!--      notification-->
      <div class="flex items-center">
        <div class="relative">
          <button @click="notificationOpen = !notificationOpen"
                  class="flex mx-4 text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <div v-show="notificationOpen" @click="notificationOpen = false"
               class="fixed inset-0 h-full w-full z-10"></div>

          <div v-show="notificationOpen" class="
              absolute
              right-0
              mt-2
              w-80
              bg-white
              rounded-lg
              shadow-xl
              overflow-hidden
              z-10
            " style="width: 20rem;z-index: 999">
            <a href="#" class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              ">
              <img class="h-8 w-8 rounded-full object-cover mx-1"
                   src="https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                   alt="avatar"/>
              <p class="text-sm mx-2">
                <span class="font-bold">Evan Josh</span> replied on the
                <span class="font-bold text-indigo-400">Upload Image</span>
                artical . 2m
              </p>
            </a>
            <a href="#" class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              ">
              <img class="h-8 w-8 rounded-full object-cover mx-1"
                   src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                   alt="avatar"/>
              <p class="text-sm mx-2">
                <span class="font-bold">Slick Net</span> start
                following you . 45m
              </p>
            </a>
            <a href="#" class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              ">
              <img class="h-8 w-8 rounded-full object-cover mx-1"
                   src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                   alt="avatar"/>
              <p class="text-sm mx-2">
                <span class="font-bold">Jane Doe</span> Like Your reply
                on
                <span class="font-bold text-indigo-400">Test with TDD</span>
                artical . 1h
              </p>
            </a>
            <a href="#" class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              ">
              <img class="h-8 w-8 rounded-full object-cover mx-1"
                   src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                   alt="avatar"/>
              <p class="text-sm mx-2">
                <span class="font-bold">Abigail Bennett</span>
                start following you . 3h
              </p>
            </a>
          </div>
        </div>
      </div>
      <!--      avatar-->
      <div class="relative">
        <button @click="dropdownOpen = !dropdownOpen" class="
            relative
            block
            w-8
            h-8
            overflow-hidden
            rounded-full
            shadow
            focus:outline-none
          ">
          <img class="object-cover w-full h-full"
               src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
               alt="Your avatar"/>
        </button>

        <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 z-10 w-full h-full"></div>

        <transition enter-active-class="transition duration-150 ease-out transform"
                    enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
          <div v-show="dropdownOpen" style="z-index: 999" class="
              absolute
              right-0
              z-20
              w-48
              py-1
              mt-2
              bg-white
              rounded-lg
              shadow-xl
            ">
            <router-link to="/profile" class="
                px-4
                py-2
                flex
                rounded-md
                text-sm text-gray-700
                hover:bg-[#f6f7fb] hover:text-[#235EE8]
              ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Profile
            </router-link>
            <span class="
                            flex
                            rounded-md
                            px-4
                            py-2
                            text-sm text-gray-700
                            hover:bg-[#f6f7fb] hover:text-[#235EE8]
                            cursor-pointer
                          "
                  @click="changeTheme">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            Dark/Light
                        </span>
            <router-link to="/" class="
                flex
                px-4
                py-2
                rounded-md
                text-sm text-gray-700
              hover:bg-[#f6f7fb] hover:text-[#235EE8]
              " @click="logout">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              Log out
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.switch {
  display: flex;
  position: relative;
}

.switch__input {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.switch__label {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 30px;
  background-color: #2B2B2B;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(.46, .03, .52, .96);
}

.switch__indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-124%);
  display: block;
  width: 20px;
  height: 20px;
  background-color: #7B7B7B;
  border-radius: 9999px;
  box-shadow: 10px 0px 0 0 rgba(#000000, 0.2) inset;

  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    background-color: #FFFFFF;
    border-radius: 9999px;
  }

  &::before {
    top: 7px;
    left: 7px;
    width: 9px;
    height: 9px;
    background-color: #FFFFFF;
    opacity: 0.6;
  }

  &::after {
    bottom: 8px;
    right: 6px;
    width: 14px;
    height: 14px;
    background-color: #FFFFFF;
    opacity: 0.8;
  }
}

.switch__decoration {
  position: absolute;
  top: 65%;
  left: 50%;
  display: block;
  width: 5px;
  height: 5px;
  background-color: #FFFFFF;
  border-radius: 9999px;
  animation: twinkle 0.8s infinite -0.6s;

  &::before,
  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #FFFFFF;
    border-radius: 9999px;
  }

  &::before {
    top: -20px;
    left: 10px;
    opacity: 1;
    animation: twinkle 0.6s infinite;
  }

  &::after {
    top: -7px;
    left: 30px;
    animation: twinkle 0.6s infinite -0.2s;
  }
}

@keyframes twinkle {
  50% {
    opacity: 0.2;
  }
}

.switch__indicator {
  &,
  &::before,
  &::after {
    transition: all 0.4s cubic-bezier(.46, .03, .52, .96);
  }
}

.switch__input:checked + .switch__label {
  background-color: #8FB5F5;
  border-color: #347CF8;

  .switch__indicator {
    background-color: #ECD21F;
    box-shadow: none;
    transform: translate(-50%, -50%) translateX(124%);

    &::before,
    &::after {
      display: none;
    }
  }

  .switch__decoration {
    top: 50%;
    transform: translate(0%, -50%);
    animation: cloud 8s linear infinite;

    width: 20px;
    height: 20px;

    &::before {
      width: 10px;
      height: 10px;
      top: auto;
      bottom: 0;
      left: -8px;
      animation: none;
    }

    &::after {
      width: 15px;
      height: 15px;
      top: auto;
      bottom: 0;
      left: 16px;
      animation: none;
    }

    &,
    &::before,
    &::after {
      border-radius: 9999px 9999px 0 0;
    }

    &::after {
      border-bottom-right-radius: 9999px;
    }
  }
}

@keyframes cloud {
  0% {
    transform: translate(0%, -50%);
  }
  50% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(0%, -50%);
  }
}


</style>