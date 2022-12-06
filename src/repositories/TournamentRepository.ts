// Utils
import { AxiosResponse } from "axios";
import http from "../utils/http-common";

/* eslint-disable */
class TournamentRepository {
    async getAll(): Promise<AxiosResponse<any, any>> {
        return http.get("/tournaments/");
    }

    async create(tournament : ITournament) : Promise<AxiosResponse<any, any>> {
        return http.post("/tournaments/", tournament);
    }
}

export default new TournamentRepository();
