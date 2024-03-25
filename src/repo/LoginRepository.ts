import { collection } from "firebase/firestore";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import BaseRepo from "./BaseRepo";
//PurpleOranges556
export default class LoginRepository extends BaseRepo {
    async login(email: string, password: string): Promise<UserCredential> {
        const response = await signInWithEmailAndPassword(this.auth, email, password)
        return response
    }
}