/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    important: true,
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bg: {
                    1: '#F6F7FB'
                }
                ,
                br: {
                    1: '#E4E9EF'
                },
                text: {
                    menu: '#235EE8',
                    default: '#878EA1',
                    active: '#235EE8',
                    name: '#394355',
                    p: '#394456',
                    image: '#262B2E'
                },
                btn: {
                    default: '#235EE8'
                },
                dark: {
                    menu: '#101018',
                    menu_item: '#272B30',
                    header_lan: '#1C1D28'
                }
            }
        },
    },
    plugins: [],
}

