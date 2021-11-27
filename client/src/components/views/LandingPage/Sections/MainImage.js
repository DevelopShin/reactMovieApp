import React, {useEffect} from "react"
export default function MainImage(props) {
      useEffect(() => {
            console.log('main Image: ', props.image)
      }, [])

      return (

                  <div  style={{
                        backgroundRepeat: 'no-repeat',
                        background: `linear-gradient(to bottom, rgba(0,0,0,0)
                  39%,rgba(0,0,0,0)
                  41%,rgba(0,0,0,0.65)
                  100%),
                  url(${props.image})`,
                        height: '500px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center, top',
                        width: '100%',
                        position: 'relative',
                        
                  }}>


                        <div style= {{ position: 'absolute', width:'50%',  marginLeft: "2rem", bottom: '2rem'}}>
                              <h2 style={{ color: 'white'}}> {props.title} </h2>
                              <p style={{color: 'white', fontSize: '1rem'}}> {props.text}</p>
                        </div>

                  </div>

      )
};
