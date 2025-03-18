/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { QuestionsController } from './../controllers/questions.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Post": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["question"]},{"dataType":"enum","enums":["answer"]}],"required":true},
            "title": {"dataType":"string","required":true},
            "voteCount": {"dataType":"double","required":true},
            "accepted": {"dataType":"boolean"},
            "status": {"dataType":"string","required":true},
            "author": {"ref":"User","required":true},
            "latestContent": {"ref":"Content","required":true},
            "contentHistory": {"dataType":"array","array":{"dataType":"refObject","ref":"Content"},"required":true},
            "question": {"ref":"Post"},
            "answers": {"dataType":"array","array":{"dataType":"refObject","ref":"Post"},"required":true},
            "tags": {"dataType":"array","array":{"dataType":"refObject","ref":"Tag"},"required":true},
            "comments": {"dataType":"array","array":{"dataType":"refObject","ref":"Comment"},"required":true},
            "votes": {"dataType":"array","array":{"dataType":"refObject","ref":"Vote"},"required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "username": {"dataType":"string","required":true},
            "displayName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string"},
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["user"]},{"dataType":"enum","enums":["admin"]}],"required":true},
            "score": {"dataType":"double","required":true},
            "googleId": {"dataType":"string"},
            "posts": {"dataType":"array","array":{"dataType":"refObject","ref":"Post"},"required":true},
            "comments": {"dataType":"array","array":{"dataType":"refObject","ref":"Comment"},"required":true},
            "votes": {"dataType":"array","array":{"dataType":"refObject","ref":"Vote"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Comment": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "text": {"dataType":"string","required":true},
            "post": {"ref":"Post","required":true},
            "author": {"ref":"User","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Vote": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "value": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["upVote"]},{"dataType":"enum","enums":["downVote"]}],"required":true},
            "post": {"ref":"Post","required":true},
            "author": {"ref":"Post","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Content": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "text": {"dataType":"string","required":true},
            "post": {"ref":"Post","required":true},
            "currentPost": {"ref":"Post"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Tag": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "color": {"dataType":"string","required":true},
            "posts": {"dataType":"array","array":{"dataType":"refObject","ref":"Post"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"ignore","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsQuestionsController_getQuestions: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/questions',
            ...(fetchMiddlewares<RequestHandler>(QuestionsController)),
            ...(fetchMiddlewares<RequestHandler>(QuestionsController.prototype.getQuestions)),

            async function QuestionsController_getQuestions(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsQuestionsController_getQuestions, request, response });

                const controller = new QuestionsController();

              await templateService.apiHandler({
                methodName: 'getQuestions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
