import React from 'react';
import Form from 'react-bootstrap/Form';

function LiveSearchResult({results}, {onChange}, value) {


    return (
        <div style={{ position: "relative", width: "30vw" }}>
            <Form.Control type="text" placeholder="Search" className="control-1" aria-label="Search" style={{ textAlign: "left" }} onChange={onChange} value={value}/>
            <div className='search-result-container'>
                {results.map((item) => {
                    return (
                        <p className='search-result-item'>{item.name}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default LiveSearchResult;