import enMessages from "../lang/en-US.json";
import plMessages from "../lang/pl.json";

export const defaultLocale = "en-US";

export const locales: {[index: string]: any} = {
    "en-US": {
        name: "English",
        messages: enMessages
    },
    "pl": {
        name: "Polski",
        messages: plMessages
    }
};