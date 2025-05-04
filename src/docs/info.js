export const info = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Api de prueba',
            version: '1.0.0',
            description: 'Api de prueba',
        },
        servers: [
            {
                url: 'http://localhost:8080/'
            }
        ]
    },
    apis: ["./src/docs/*.yml"],
}

