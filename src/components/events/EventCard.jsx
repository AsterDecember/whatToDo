import { Card,Button} from 'antd';
import React from 'react'

const { Meta } = Card;

const EventCard = (props) => {

    const renderEvents = () => {
        const {events,loged,userId} = props
        const {addEvent} = props
        return  events ? events.map((element) => {
                var date = new Date(element.start.utc)
                date.toString()
                 return (<div className='singleCard' key={element.id} >
                    <Card

                        hoverable
                        style={{width: 240, marginTop: '1rem'}}
                        cover={<img alt={element.name}
                                    src={element.logo ? element.logo.url : 'https://www.valuewalk.com/wp-content/uploads/2017/04/no-thumbnail.png'}/>}
                    >
                        <Meta
                            title={element.name.text}
                            description={date.toString()}
                        />
                        <a href={element.url} target="_blank">
                            <Button type="primary" block>More information</Button>
                        </a>
                        {loged && <Button block onClick={()=>{
                            addEvent({element,userId})
                        }}>Add event</Button>}
                    </Card>
                </div>)
            }
        ) : <h1>No info</h1>

    }
    return(
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <div className='boxCard'>
                {renderEvents()}
            </div>
        </div>
    )
}

export default EventCard