import { d949 as c0 } from '../descriptors/data/46.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d949 as d949 } from '../descriptors/data/46.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkFulfillmentNoShowRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkFulfillmentNoShowRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
