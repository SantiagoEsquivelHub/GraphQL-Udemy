import { checkRound, checkYear } from '../lib/utils';
import { F1 } from './data-source';

export class StandingsData extends F1 {
  constructor() {
    super();
  }

  async getSeasonPilotsRaking(year: string) {
    year = checkYear(year);
    return await this.get(`/${year}/driverStandings.json`, {
      //TTL= time to live
      cacheOptions: { ttl: 60 },
    });
  }
}
