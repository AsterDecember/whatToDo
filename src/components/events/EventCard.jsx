import { Card, Col, Row, Button} from 'antd';
import React from 'react'

const { Meta } = Card;

const EventCard = (props) => {
    const renderEvents = () => {
        const {events} = props
        return  events ? events.map((e) => {
                var date = new Date(e.start.utc)
                date.toString()
                console.log('this info:',date)
                 return <Col key={e.id} span={8}>
                    <Card

                        hoverable
                        style={{width: 240, marginTop: '1rem'}}
                        cover={<img alt={e.name}
                                    src={e.logo ? e.logo.url : 'https://www.valuewalk.com/wp-content/uploads/2017/04/no-thumbnail.png'}/>}
                    >
                        <Meta
                            title={e.name.text}
                            description={date.toString()}
                        />
                        <a href={e.url}>
                            <Button type="primary" block>More information</Button>
                        </a>
                    </Card>
                </Col>
            }
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