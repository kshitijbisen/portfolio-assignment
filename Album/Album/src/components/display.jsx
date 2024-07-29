

function Display({ image }) {


    return (
        <div style={{ display: "flex", flexWrap:'wrap', justifyContent:'space-around'}}>
            {image.map((i, index) => (
                <div  style={{width:'30%', justifyContent:'center', alignItems:'center'}}>

                    <img
                        key={index}
                        src={i.image}
                        alt={`Selected ${index}`}
                        style={{ width: '100%', height: '150px', objectFit: 'cover', margin: '10px' }}

                    />
                    
                    <div  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div>
                            {i.description}</div></div>
                </div>
            ))}
        </div>

    )
}

export default Display
