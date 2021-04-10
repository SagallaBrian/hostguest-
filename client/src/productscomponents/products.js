import {Link} from "react-router-dom";

const { Component } = require("react");


class Productclas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statdata: [],
            arrlen: 0,
            arrpos: 0
        }
        this.myhandledatafun = this.myhandledatafun.bind(this)
        this.incrimentpos = this.incrimentpos.bind(this)
        this.decrementpos = this.decrementpos.bind(this)
    }

    myhandledatafun(paramsdata) {
        let imageurl = "https://www.api.komplab.com/images/img1.jpeg";
        function mysecfu(params) {
            // console.log(params)
            let myregex1 = /- Any Brand/gi
            let myregex2 = /, Any Item/gi
            let newdata = params.replace(myregex1, '');
            newdata = newdata.replace(myregex2, '');
            return newdata

        }
        let arrslise = paramsdata.slice(this.state.arrpos, this.state.arrpos + 6)
        let divdata = arrslise.map((arrelem) => {
            return (
                <div key={arrelem._id} className="col-md-4 mb-3">
                    <div className="card p-2 text-secondary">
                        <img src={arrelem.imageurl} alt={arrelem._id} className="img-fluid" />
                        <h5 className="pt-2" >Name:
                            <span className="text-success"> {mysecfu(arrelem.name)}</span>
                        </h5>
                        <p > Category:
                            <span className="text-danger"> {arrelem.categories[0]} </span>
                        </p>
                        <Link to={`/singprod/${arrelem._id}`} className="btn btn-primary">Learn More</Link>
                    </div>

                </div>
            );
        })
        return divdata;
    }

    incrimentpos() {

        this.setState(
            {
                arrpos: this.state.arrpos + 6
            }, () => {
                console.log(this.state.arrpos)
                console.log(this.state.arrlen)
            }
        )
    }

    decrementpos() {

        this.setState(
            {
                arrpos: this.state.arrpos - 6
            }, () => {
                console.log(this.state.arrpos)
            }
        )
    }


    componentDidMount() {

        fetch('http://127.0.0.1:8000/api/data')
            .then((mydata) => {
                return mydata.json();
            })
            .then((mydata) => {
                this.setState({
                    statdata: mydata,
                    arrlen: mydata.length
                }, () => {
                    console.log(this.state.arrlen)
                })
            })
            .catch((error) => {
                console.log("error")
            })



    }

    render() {


        return (
            <div className="container-lg pb-5">
                
                <div className="row mb-3">
                    <div className="col-md-6">
                        {this.state.arrpos ?
                            <button className="btn btn-success" onClick={this.decrementpos}>Prev</button> : ''
                        }
                    </div>
                    <div className="col-md-6 text-md-right">

                        {(this.state.arrlen - this.state.arrpos >= 6) ?
                            <button className="btn btn-danger" onClick={this.incrimentpos}>Next</button> : ''
                        }

                    </div>
                </div>
                <div className="row">
                    {this.myhandledatafun(this.state.statdata)}

                    {/* <h4>how are you mr. {stringdata}</h4> */}
                    {/* <HandleData mypropdata={data} /> */}

                </div>
            </div>
        );
    }

}

export default Productclas