import {useEffect} from 'react'

function useDocumentTitle(title: string, prevailOnUnmount = false) {
    const defaultTitle = "Sales Portal Pro";

    useEffect(() => {
        document.title = `${title} - SPP`;
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle;
        }
    }, [])
}

export default useDocumentTitle