import { useState } from "react"
import apiClient from "../../services/apiClient"
import {useNavigate} from "react-router"
function Signup(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const data = await apiClient.signup(name,email,password)
            console.log("Signup response",data);

            if(data.success)
            {
                navigate("/login")
            }
            else{
                setError(data.message ?? "Signup failed")
            }
        } catch (error) {
            
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="signup">
            <h1>Welcome to Nemo's Signup page</h1>
            {error && <div>Error: {error}</div>}
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled ={loading}>
                    {loading ? "Signup..." : "Signup"}
                </button>

            </form>
        </div>
    )
}

export default Signup