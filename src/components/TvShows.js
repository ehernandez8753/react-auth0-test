import React, {useState, useEffect} from "react";
import "./styles.css";

//Since we're using react hooks (useState and useEffect), we can make components with no classes


function TvShows(){
    //Variables shows is similar to this.state, setShows is this.setState, and useState will be our initial state value
    const [shows, setShows] = useState([]);

    //UseEffect instead of componentDidMount, fetch calls api and receives response data
    useEffect(() => {
        fetch("http://localhost:3005/api/data/tvShows")
        .then(response => response.json())
        .then(data => {
            setShows(data);
        });
    }, []);

    //THIS INFORMATION IS ***NOT PROTECTED***, as in, it's allowable regardless if user is authenticated

    return(
        <div>
            <h1>TV SHOWS</h1>
            {shows.map(shows => (
                <div className="card" key={shows.id}>
                    <h3>{shows.name}</h3>
                    <h5>{shows.airDate}</h5>
                </div>
            ))}
        </div>
    );
}

export default TvShows;