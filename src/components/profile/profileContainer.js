import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getDataThunk} from "../../redux_store/Store/MyDataReducer";

const ProfileContainer = (props) => {
    useEffect(()=>{
        props.getDataThunk()
        console.log('[]-------------------------[]')
    },[])
    return(
        <Profile {...props} />
    )
}


const mapStateToProps = (state) => {
    return {
        ProfileData : state.ProfileData
    }
}

export default connect(mapStateToProps, {getDataThunk})(ProfileContainer)