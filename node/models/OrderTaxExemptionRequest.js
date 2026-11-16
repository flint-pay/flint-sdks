import { d6351 as c0 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7263 as c1 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7271 as c2, d7272 as c3, d7273 as c4, d7274 as c5, d7275 as c6, d7276 as c7, d7277 as c8 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6186 as c9, d6187 as c10, d6188 as c11, d6189 as c12 } from '../descriptors/data/282.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7263 as d7263 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1096"]:c2(),["SharedCodec1097"]:c3(),["SharedCodec1098"]:c4(),["SharedCodec1099"]:c5(),["SharedCodec1100"]:c6(),["SharedCodec1101"]:c7(),["SharedCodec1102"]:c8(),["SharedCodec492"]:c9(),["SharedCodec493"]:c10(),["SharedCodec494"]:c11(),["SharedCodec495"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
