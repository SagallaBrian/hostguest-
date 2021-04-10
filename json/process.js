const mydata = require('./product.json');
let newarr = [];

for (let y = 0; y < mydata.length; y++) {
    const arrelem = mydata[y];
    
    let newobj = {
        name: arrelem.name,
        description: arrelem.description || '',
        imageurl: arrelem.imageurl,
        mootpoints: arrelem.mootpoints,
        limit: arrelem.limit,
        categories: arrelem.categories,
        vendor: arrelem.vendor || '',
        active: arrelem.active,
        deleted_at:arrelem.deleted_at 
    };
    newarr.push(newobj)
}

let stringver = JSON.stringify(newarr);
let regx = /\$/gi
let newst = stringver.replace(regx, '');
let jsintro = JSON.parse(newst);



module.exports = jsintro ;