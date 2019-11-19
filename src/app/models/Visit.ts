import {Patient} from './Patient';
import {Doctor} from './Doctor';

export class Visit {
    constructor(
        public id?: number,
        public date?: Date,
        public time?: string,
        public doctor?: Doctor,
        public patient?: Patient,
        public conclusion?: string
    ) {
    }

}
