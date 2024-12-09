import moment from "moment"

export const isDate=(value,{req, location, path})=>{
    if(!value){
        return false
    }
    const date = moment(value)
    if(!date.isValid()){
        return false
    }else{
        return true
    }
}