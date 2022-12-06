import Repository from "../repositories/TournamentRepository";

import to from "await-to-js";

/* eslint-disable */
class TournamentService {
    async getAll() {
        const [err, response] = await to(Repository.getAll());

        if (err) {
            console.log('error status ', err.message);
            return [] as ITournament[];
        }

        if (!response || !response.data) {
            console.log('No data');
            return [] as ITournament[];
        }

        return response.data;
    } 

    async save (tournament: ITournament) {
        const [err, response] = await to(Repository.create(tournament));

        if (err) {
            console.log('error status ', err.message);
            return {};
        }

        if (!response || !response.data) {
            console.log('No data');
            return {};
        }

        return response.data;
    }
}

export default new TournamentService();
