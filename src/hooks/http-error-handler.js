import { useEffect, useState } from "react";


const HttpClient = (httpClient) => {
    const [error, seterror] = useState(null);

    const reqInterceptor = httpClient.interceptors.request.use(req => {
        seterror(null);
        return req;
    });
    const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
        seterror(err);
    });


    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.response.eject(resInterceptor);
        };
    }, [reqInterceptor, resInterceptor, httpClient]);

    const errorConfirmedHandler = () => {
        seterror(null);
    }

    return [error, errorConfirmedHandler];
}

export default HttpClient;