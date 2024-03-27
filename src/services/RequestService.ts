import Request from "../classes/Request";
import RequestRepository from "../repo/RequestRepository";

export default class RequestService {
    private repo: RequestRepository
    constructor(repo: RequestRepository) {
        this.repo = repo
    }

    createRequest(request: Request) {
        this.repo.createRequest(request)
    }

    async getAllRequests(): Promise<[]> {
        return await this.repo.getAllRequests()
    }
}