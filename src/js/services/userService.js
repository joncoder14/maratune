export async function responseUser(email, password) {

    try {
        console.log('antes');
        
        const response = await fetch('https://maratune.onrender.com/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
              
            })
        })
        console.log('despues');
        
        
        return response
        
    } catch (error) {
        console.log(Error, "error");        
    }

    // const response = await fetch("http://localhost:3000/users")
    // const data = await response.json()
    // return data
    
}