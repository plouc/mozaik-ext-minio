import React, { Component, PropTypes } from 'react'


class Bucket extends Component {
    static getApiRequest({ bucket }) {
        return {
            id:     `minio.listBucketObjects.${ bucket }`,
            params: { bucket }
        }
    }

    render() {
        const { bucket, apiData: objects } = this.props

        return (
            <div>
                <div className="widget__header">
                    <span>
                        <span className="widget__header__subject">{bucket}</span>&nbsp;
                        bucket
                    </span>
                    <span className="widget__header__count">
                        {objects.length}
                    </span>
                    <i className="fa fa-hdd-o" />
                </div>
                <div className="widget__body">
                    {objects.map(obj => (
                        <div key={obj.name} className="list__item">
                            {obj.name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

Bucket.propTypes = {
    bucket:  PropTypes.string.isRequired,
    apiData: PropTypes.array.isRequired,
}

Bucket.defaultProps = {
    apiData: [],
}


export default Bucket
