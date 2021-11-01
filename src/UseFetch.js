import { useState , useEffect } from 'react'
const UseFetch = (url) => {
    const [pending , setPending] = useState('');
    const [error ,showError] =useState('');
    const [data,setData] = useState('');

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('data not fetched for that resource')
            }
            return res.json();
        })
        .then(data => {
            setData(data)
            setPending(false);
            showError(null);
        })
        .catch(err => {
            setPending(false);
            showError(err.message);
        })    
},[url]);

    return {pending,error,data}
}
 
export default UseFetch;
