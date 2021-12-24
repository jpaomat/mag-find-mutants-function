import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda";
import * as _ from "lodash";

export const handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResultV2> => {
    console.log('Welcome', event);
    const max = 10;
    const _val = _.random(max);
    const response = {
        statusCode: 200,
        body: JSON.stringify(`The random value (max ${max}) es: ${_val}`)
    };
    return response;
};
