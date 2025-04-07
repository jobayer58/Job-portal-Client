import { useContext } from "react"
import AuthContext from "../contexr/AuthContext/AuthContext"

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

export default useAuth