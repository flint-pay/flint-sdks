import { d6351 as c0 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1063 as c1 } from '../descriptors/data/52.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7273 as c2 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6186 as c3, d6187 as c4, d6188 as c5, d6189 as c6 } from '../descriptors/data/282.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1063 as d1063 } from '../descriptors/data/52.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1063;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionInputOrder"]:c1(),["SharedCodec1098"]:c2(),["SharedCodec492"]:c3(),["SharedCodec493"]:c4(),["SharedCodec494"]:c5(),["SharedCodec495"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
