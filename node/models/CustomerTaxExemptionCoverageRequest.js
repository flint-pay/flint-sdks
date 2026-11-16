import { d6351 as c0 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6186 as c1, d6187 as c2, d6188 as c3, d6189 as c4 } from '../descriptors/data/282.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6351 as d6351 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6351;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec492"]:c1(),["SharedCodec493"]:c2(),["SharedCodec494"]:c3(),["SharedCodec495"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
