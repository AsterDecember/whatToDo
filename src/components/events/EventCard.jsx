import { Card, Col, Row } from 'antd';
import React from 'react'

const { Meta } = Card;

const EventCard = (props) => {
    const renderEvents = () => {
        const {events} = props
        return  events ? events.map((e) =>
            <Col key={e.id} span={8}>
                <Card

                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={e.name} src={e.logo ? e.logo.url:'https://www.freeiconspng.com/uploads/no-image-icon-15.png'} />}
                >
                    <Meta
                        title={e.name.text}
                        description={e.url}
                    />
                </Card>
            </Col>
        ) : <h1>No info</h1>

    }
    return(
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
                {renderEvents()}
            </Row>
        </div>
    )
}

export default EventCard