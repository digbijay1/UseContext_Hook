import React, { useContext } from 'react'
import {MovieContext} from "./MovieContext"
function Nav(props) {
  const [movies]=useContext(MovieContext)
    return (
      <div>
        <h3>Dev Ed</h3>
        {/* <p>List Of movies:{props.send}</p> */}

        <p>List Of movies:{movies.length}</p>
      </div>
    );
}

export default Nav
