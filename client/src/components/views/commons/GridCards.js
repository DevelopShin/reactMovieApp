import React from 'react'
import {Col, Im} from 'antd'

export default function GridCards(props) {
      return (
            <div>
              <Col lg={6} md={8} xs={24} xxl={4}>
                  <div style={{position:'relative'}}>
                        <a href={`/movie/${props.movieId}`}>
                              <img style={{width:'100%', height:'400px'}}src={props.imageUrl} alrt={props.movieName}/>
                        </a>
                  </div>
              </Col>    
            </div>
      )
}
