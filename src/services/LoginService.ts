import { UserCredential } from "firebase/auth";
import LoginRepository from "../repo/LoginRepository";

export default class LoginService {
    private repo: LoginRepository
    constructor(repo:  LoginRepository) {
        this.repo = repo
    }

    async login(email: string, password: string): Promise<UserCredential> {
        return await this.repo.login(email, password)
    }
}