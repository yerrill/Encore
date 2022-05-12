export interface details {
    endpoint: string;
    method: string
}


/**
 * Generic Response from Bungie's API
 */
export interface generic {
    Response: Object;
    ErrorCode: number;
    ThrottleSeconds: number;
    ErrirStatus: string;
    Message: string;
    MessageData: Object;
    DetailedErrorTrace: string;
}