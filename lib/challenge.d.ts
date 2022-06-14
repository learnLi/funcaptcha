/// <reference types="node" />
import { TokenInfo } from "./session";
interface ChallengeData {
    token: string;
    tokenInfo: TokenInfo;
    session_token: string;
    challengeID: string;
    game_data: {
        gameType: number;
        customGUI: {
            _challenge_imgs: string[];
            api_breaker: string;
        };
        waves: number;
        game_variant: string;
    };
}
interface AnswerResponse {
}
export declare abstract class Challenge {
    data: ChallengeData;
    imgs: Promise<Buffer>[];
    wave: number;
    protected key: string;
    protected userAgent: string;
    constructor(data: ChallengeData, userAgent: string);
    getImage(): Promise<Buffer>;
    protected getKey(): Promise<string>;
    abstract answer(answer: number): Promise<AnswerResponse>;
}
export declare class Challenge3 extends Challenge {
    private answerHistory;
    constructor(data: ChallengeData, userAgent: string);
    answer(tile: number): Promise<AnswerResponse>;
}
export {};