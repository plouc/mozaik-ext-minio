const convict = require('convict')


const config = convict({
    minio: {
        endPoint: {
            doc:     'The minio end point.',
            default: null,
            format:  String,
            env:     'MINIO_END_POINT',
        },
        port: {
            doc:     'The minio port.',
            default: 80,
            format:  'port',
            env:     'MINIO_PORT',
        },
        secure: {
            doc:     'Use secure connection.',
            default: false,
            format:  Boolean,
            env:     'MINIO_SECURE',
        },
        accessKey: {
            doc:     'The minio access key.',
            default: null,
            format:  String,
            env:     'MINIO_ACCESS_KEY',
        },
        secretKey: {
            doc:     'The minio secret key.',
            default: null,
            format:  String,
            env:     'MINIO_SECRET_KEY',
        },
    },
})


module.exports = config
