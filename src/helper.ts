const DEFAULT_IPFS_GATEWAY_URL = 'https://ipfs.infura.io/ipfs/';

const cleanUpHash = (hash: string): string => {
    // remove the leading 'ipfs://' if it exists
    if (hash.startsWith('ipfs://')) {
        return hash.substring(7);
    }
    return hash;
};

/**
 * @param hash - pass ipfs hash or ipfs url like ipfs://hash
 */
export const getIpfsMimeType = async (
    hash: string,
    gateway: string = DEFAULT_IPFS_GATEWAY_URL
): Promise<string> => {
    try {
        hash = cleanUpHash(hash);
        const req = await fetch(gateway + hash, {
            method: 'HEAD',
        });
        if (!req.ok) {
            throw new Error(req.statusText);
        }
        return req.headers.get('content-type') ?? '';
    } catch (error) {
        throw new Error((error as any).message ?? '');
    }
};
