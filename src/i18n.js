
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

let languageInit = localStorage.getItem('language') ? localStorage.getItem('language') : 'vn';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: languageInit,
        backend: {
            /* translation file path */
            loadPath: '/i18n/{{ns}}/{{lng}}.json'
        },
        fallbackLng: 'en',
        debug: true,
        /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    })

export default i18n