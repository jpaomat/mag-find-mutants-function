import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda";
import * as _ from "lodash";
import app from "./src/app";

export const handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResultV2> => {
    const response = {
        statusCode: 200,
        body: event.body
    };
    return response;
};
