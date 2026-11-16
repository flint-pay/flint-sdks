import { d156 as c0 } from '../descriptors/data/7.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d156 as d156 } from '../descriptors/data/7.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckInTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckInTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
