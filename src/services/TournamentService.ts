// Utils
import http from "../utils/http-common";

/* eslint-disable */
class TournamentService {
    async getAll() {
        return http.get("/tournaments/");
    }

    async create(data: any) {
        return http.post("/tournaments", data);
    }
}

export default new TournamentService();
