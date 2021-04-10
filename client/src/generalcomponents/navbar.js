import {Link} from "react-router-dom";

const { Component } = require("react");

class Navbarclas extends Component {

    render() {
        return (
            <div className="container-lg">
               <div className="pt-3">
               <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-white">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item"><Link to="/prod">Products</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
               </div>

            </div>
        );
    }

}

export default Navbarclas