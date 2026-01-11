export function extractQueryParams(query) {
    return query
    .replace("?", "")
    .split("&")
    .reduce((queryParams, param) => {
        const [key, value] = param.split("=")

        queryParams[key] = value

        return queryParams
    }, {})
}