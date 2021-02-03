import React from 'react';

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file
            } className='message-image' style={{ float: 'right' }} ></img >
        )
    }
	return <div>MYMESSAGE</div>;
};

export default MyMessage;
