export const templateResponse = (statusCode: number, message: string, body: any) => {
    return {
        body,
        message,
        statusCode,
    };
};
