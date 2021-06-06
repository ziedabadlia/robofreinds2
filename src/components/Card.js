import react from 'react';
const Card = ({name,email,id}) => {
    return (
        <div  className=' divider space bg-light-green dib br5 pa3 ml3 mw7 grow bw2 shadow-5'  >
            <img alt='robots' src={`https://robohash.org/${id}`} height='200px' width='200px' />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>  
        </div>       
    );
}

export default Card ;