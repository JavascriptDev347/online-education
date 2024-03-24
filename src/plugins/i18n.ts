import { createI18n } from "vue-i18n";
import eng from "@/locales/eng.json";
import ru from "@/locales/ru.json";
import uz from "@/locales/uz.json";

const lang = localStorage.getItem("lang")
const i18n = createI18n({
    locale: lang ? lang : 'uz',
    messages: { eng, uz, ru },
    legacy: false
})

export default i18n;