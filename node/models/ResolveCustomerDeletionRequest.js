import { d1339 as c0 } from '../descriptors/data/64.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6290 as c1, d6291 as c2 } from '../descriptors/data/288.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1339 as d1339 } from '../descriptors/data/64.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolveCustomerDeletionRequest"]:c0(),["SharedCodec1428"]:c1(),["SharedCodec1429"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolveCustomerDeletionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
