# Mozaïk widgets for Minio object storage

[![License][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependencies][gemnasium-image]][gemnasium-url]
[![Coverage Status][coverage-image]][coverage-url]

## Minio Client Configuration

In order to use the Mozaïk minio widgets, you should configure its **client**.

### parameters

key         | env key          | required | default | description
------------|------------------|----------|---------|----------------------------
`endPoint`  | MINIO_END_POINT  | yes      | `n/a`   | *minio end point*
`port`      | MINIO_PORT       | no       | 80      | *minio port*
`secure`    | MINIO_SECURE     | no       | false   | *secure connection*
`accessKey` | MINIO_ACCESS_KEY | yes      | `n/a`   | *minio access key*
`secretKey` | MINIO_SECRET_KEY | yes      | `n/a`   | *minio secret key*


[license-image]: https://img.shields.io/github/license/plouc/mozaik-ext-minio.svg?style=flat-square
[license-url]: https://github.com/plouc/mozaik-ext-minio/blob/master/LICENSE.md
[travis-image]: https://img.shields.io/travis/plouc/mozaik-ext-minio.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-ext-minio
[npm-image]: https://img.shields.io/npm/v/mozaik-ext-minio.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/mozaik-ext-minio
[gemnasium-image]: https://img.shields.io/gemnasium/plouc/mozaik-ext-minio.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/plouc/mozaik-ext-minio
[coverage-image]: https://img.shields.io/coveralls/plouc/mozaik-ext-minio.svg?style=flat-square
[coverage-url]: https://coveralls.io/github/plouc/mozaik-ext-minio
