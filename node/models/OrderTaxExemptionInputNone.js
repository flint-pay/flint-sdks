import { d1062 as c0 } from '../descriptors/data/52.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7272 as c1, d7273 as c2, d7274 as c3 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1062 as d1062 } from '../descriptors/data/52.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputNone"]:c0(),["SharedCodec1097"]:c1(),["SharedCodec1098"]:c2(),["SharedCodec1099"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
