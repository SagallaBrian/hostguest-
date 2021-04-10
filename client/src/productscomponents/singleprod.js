import { Component } from "react";

class Myhandledatafun extends Component {
    constructor(props){
        super(props);
        console.log()
        this.state = {
            defaultimg :"https://www.api.komplab.com/images/img1.jpeg",
            statdata: {},
            arrlen: 0,
            arrpos: 0
        }
    }

    componentDidMount() {

        fetch(`http://127.0.0.1:8000/api/singprod/${this.props.match.params.prodid}`)
            .then((mydata) => {
                return mydata.json();
            })
            .then((mydata) => {
                this.setState({
                    statdata:  mydata,
                    arrlen: mydata.length
                }, () => {
                    this.mynewfunction(this.state.statdata);
                })
            })
            .catch((error) => {
                console.log("error")
            })



    }
    mynewfunction(params){
        console.log(params);
        // let uprdname = params.name ;
        // let myregex1 = /- Any Brand/gi
        // let myregex2 = /, Any Item/gi
        // let newdata = uprdname.replace(myregex1, '');
        // newdata = newdata.replace(myregex2, '');
    }

    mysecfu(params) {
        let neparam = String(params);
        let myregex1 = /- Any Brand/gi
        let myregex2 = /, Any Item/gi
        let newdata = neparam.replace(myregex1, '');
        newdata = newdata.replace(myregex2, '');
        return newdata
    }
    render(){
        let mypro = this.state.statdata.name ;
        

        return(
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.statdata.imageurl} alt="my" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 text-secondary">
                        <div className="py-5">
                            <div>
                                <h3 className="text-danger">Product Details</h3>
                            </div>
                        <h5>
                            Name: <span className="text-success">{this.mysecfu(mypro)}</span>
                        </h5>
                        <h5>Category: <span className="text-danger">{this.state.statdata.categories}</span> </h5>
                        <h5>Vendor: <span className="text-primary">{this.state.statdata.vendor}</span> </h5>
                        <h5>Image URL: <span className="text-success">{this.state.statdata.imageurl}</span> </h5>
                        <h5>ID: <span className="text-success">{this.state.statdata._id}</span> </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    /**
    let arrslise = props.slice(this.state.arrpos, this.state.arrpos + 6)
    let divdata = arrslise.map((arrelem) => {
        return (
            <div key={arrelem._id} className="col-md-4 mb-2">
                <div className="card p-2 text-secondary">
                    <img src={imageurl} alt={arrelem._id} className="img-fluid" />
                    <h5 >Name:
                        <span className="text-success"> {mysecfu(arrelem.name)}</span>
                    </h5>
                    <p > Category:
                        <span className="text-danger"> {arrelem.categories[0]} </span>
                    </p>
                    <a href={'e'} className="btn btn-primary">Learn More</a>
                </div>

            </div>
        );
    })
    return divdata;
     */
}


export default Myhandledatafun ;