import { Context, Handler } from "aws-lambda";

interface ReqEvent {
    key1: string;
    key2: string;
    key3: string;
};

interface Res {
    statusCode: number;
    body: string;
}

export const handler: Handler<ReqEvent, Res> = async (event: ReqEvent, context: Context): Promise<Res> => {
    const response = {
        statusCode: 200,
        body: 'Hola'
    };
    return response;
};
