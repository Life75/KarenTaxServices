import { addDoc, collection, getDocs } from "firebase/firestore";
import BaseRepo from "./BaseRepo";
import Request from "../classes/Request";
//No need to currently create a base for now, we're only doing one api call
export default class RequestRepository extends BaseRepo {


    createRequest(request: Request) {
        addDoc(collection(this.db, "request"), {
            Email: request.Email,
            PhoneNumber: request.PhoneNumber,
            Name: request.Name,
            DateRecieved: String(Date.now())
        })
    }
    async getAllRequests(): Promise<[]> {
        let requests: any = []
        const querySnapshot = await getDocs(collection(this.db, "request"))
        querySnapshot.forEach((doc) => {
            const request = doc.data()
            requests.push(request)
        })
        
        return requests 
    }
}