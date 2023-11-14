import axios from "axios";

function usePostUser(user) {
    if (user) {
        const {displayName, email } = user;
        axios.post("https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/users", {name: displayName, email, role: "user"})
    }
}

export default usePostUser
