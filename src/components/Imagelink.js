import React from 'react';
import form from './form.css'

const Imagelink = ({onSubmitevent , onChangeevent}) => {
    return(
        <div>
            <div>
                <p>
                    hey,this app can detect face!! give it a try..
                </p>
            </div>
            <div className='center'>
                <div className="form pa3 br3 shadow-5">
                    <input type="text" style={{width:'70%'}} onChange={onChangeevent}></input>
                    <button style={{border:'none'}} className="w-30 br3  grow link pa1 dib white pointer bg-dark-blue"  type="submit" onClick={onSubmitevent}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Imagelink;