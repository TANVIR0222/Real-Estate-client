export const formateDate = (isoDate) =>{
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-us',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        
    })


}