const config = require('./config')
const Minio  = require('minio')


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
    mozaik.loadApiConfig(config)

    const minioClient = new Minio.Client({
        endPoint:  config.get('minio.endPoint'),
        port:      config.get('minio.port'),
        secure:    config.get('minio.secure'),
        accessKey: config.get('minio.accessKey'),
        secretKey: config.get('minio.secretKey'),
    });

    const operations = {
        listBucketObjects: ({ bucket }) => {
            return new Promise((resolve, reject) => {
                const objects = []

                const stream = minioClient.listObjectsV2(bucket,'', true)

                stream.on('data',  obj => { objects.push(obj) })
                stream.on('error', err => { reject(err)       })
                stream.on('end',   ()  => { resolve(objects)  })
            })
        }
    }

    return operations
}


module.exports = client
