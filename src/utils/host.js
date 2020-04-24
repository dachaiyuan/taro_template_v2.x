
function getApiHost() {
    if (process.env.HOST_ENV === 'neibu') return 'https://xxxx.neibu.com';
    if (process.env.NODE_ENV === 'development') {
        return `${process.env.IP_ADDRESS}:3721`;
    }
    if (process.env.NODE_ENV === 'production') {
        return 'https://xxx.com'
    }
}

function getImageHost() {
    if (process.env.NODE_ENV === 'development') {
        return `${process.env.IP_ADDRESS}:3721`;
    }
    return 'https://cdns.com'
}

export const API_HOST = getApiHost();
export const IMAGE_HOST = getImageHost()