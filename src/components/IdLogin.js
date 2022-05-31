
/********************Imports******************** */
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { setInstituteId } from "../../utils";
import {apiBaseUrl} from "../../utils/Config";

/********************Imports******************** */
const instIdApiUrl = `${apiBaseUrl}/api/users/auth/instid`; //The api url to get the institute id

/*********************Components****************** */
function IdLogin()
{
    const history = useHistory();
    
    //Getting the institute id
    const instHash = useParams().instHash;

    //Getting the token
    useEffect(() => getInstId(instHash, history), []);

    return (
        <div className="content-wrapper d-flex align-items-center justify-content-center">
            <h1 className="text-center" id="id-login-txt">Loading</h1>
        </div>
    );
}

/********************Functions******************** */
function getInstId(instHash, history)
{
    fetch(`${instIdApiUrl}/${instHash}`, {
        method: "GET"
    })
    .then((resp) => {
        if(resp.status !== 200)
            throw Error(resp.status);
        return resp.json();
    })
    .then((data) => {
        if(!data.success)
            throw Error(data.msg);
        setInstituteId(data.instId);
        history.replace(`/view-courses/${data.instId}`);
    })
    .catch((err) => {
        console.log(err);
        alert("Failed to load");
    })
}

/********************Exports******************** */
export default IdLogin;