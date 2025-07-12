import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CSCI 5709 MERN API',
            version: '1.0.0',
            description: 'API documentation for the CSCI 5709 MERN project',
            termsOfService: 'http://example.com/terms',
            contact: {
                name: 'Support',
                url: 'http://example.com/support',
                email: 'example@google.com',
            },
            license: {
                name: 'MIT',
                url: 'http://example.com/license',
            },
        },
        tags: [
            {
                name: 'Products',
                description: 'Operations related to products',
            },
        ],
        servers: [
            {
                url: 'http://localhost:5400',
            },
        ],
        apis: ['../routes/*.js'],
    },
    apis: ['../routes/*.js'],
}