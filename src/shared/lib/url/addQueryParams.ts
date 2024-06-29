export function getQueryParams(params: OptionalRecord<string, string>) {
    console.log(params)
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams)
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        } else {
            searchParams.delete(name);
        }
    });

    return `?${searchParams.toString()}`;
}

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
