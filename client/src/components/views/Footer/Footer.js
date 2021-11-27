import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{backgroundColor: 'gray'}}>
            
            <div style={{
                height: '80px', display: 'flex',
                flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', fontSize:'1rem', backgroundColor:'#fff2'
            }}>
            <p> Happy Coding  <Icon type="smile" /></p>
            </div>
        </div>
    )
}

export default Footer
