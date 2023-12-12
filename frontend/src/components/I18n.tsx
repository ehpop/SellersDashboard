import {IntlProvider} from "react-intl";
import {defaultLocale, locales} from "../i18n/i18n-config";
import React, {useState} from "react";
import {LocaleContext} from "../context/LocaleContext";


export default function I18n({children}: any) {
    const [locale, setLocale] = useState<string>(defaultLocale);

    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
            <IntlProvider
                locale={locale}
                defaultLocale={defaultLocale}
                messages={locales[locale]?.messages}
            >
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
}