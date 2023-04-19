import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";


const userService = {
    create:(user)=>axiosService.post(urls.user, user)

}

export {
    userService
}