//check whether the id is number or not

const CheckId = (id) => {
    const uid = typeof(id) == "number" ? id : false;
    if(uid){
        return {
            status : true,
            id : parseInt(uid)
        }
    }else{
        return {
            status : false,
            message : "please provide the integer user id"
        };
    }
}

module.exports = CheckId;