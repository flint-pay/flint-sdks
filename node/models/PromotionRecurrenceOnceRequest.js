import { d1281 as c0 } from '../descriptors/data/61.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7520 as c1 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1281 as d1281 } from '../descriptors/data/61.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnceRequest"]:c0(),["SharedCodec1345"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
