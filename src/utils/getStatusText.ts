export const getStatusText = (codeStatus: number) => ({
    400: 'BAD_REQUEST',
    201: 'CREATED',
    302: 'FOUND',
    500: 'INTERNAL_SERVER_ERROR',
    404: 'NOT_FOUND',
    200: 'OK',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN'
})[codeStatus];
