import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

export default function Account() {
    const [isLoggedIn, setIsLoggedIn] = useState();

    let history = useHistory();

    useEffect(() => {
        setIsLoggedIn(localStorage.key("isLoggedIn"));
      }, []);

    function handleLogOut() {
        setIsLoggedIn(false);
        localStorage.clear();
        history.push("/");
        window.location.reload();
    }

    return (
        <>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    )
}