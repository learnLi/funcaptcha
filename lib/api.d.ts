interface GetTokenOptions {
    pkey: string;
    surl?: string;
    data?: {
        [key: string]: string;
    };
    headers?: {
        [key: string]: string;
    };
    site?: string;
}
export interface GetTokenResult {
    challenge_url: string;
    challenge_url_cdn: string;
    challenge_url_cdn_sri: string;
    disable_default_styling: boolean | null;
    iframe_height: number | null;
    iframe_width: number | null;
    kbio: boolean;
    mbio: boolean;
    noscript: string;
    tbio: boolean;
    token: string;
}
declare function getToken(options: GetTokenOptions): Promise<GetTokenResult | string>;
declare const _default: {
    getToken: typeof getToken;
};
export default _default;
