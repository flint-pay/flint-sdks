import { d183 as c0 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7107 as c1, d7108 as c2 } from '../descriptors/data/334.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d183 as d183 } from '../descriptors/data/8.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d183;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CommitInventoryReservationRequest"]:c0(),["SharedCodec172"]:c1(),["SharedCodec173"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
