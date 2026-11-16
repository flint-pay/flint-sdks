import { d6351 as c0 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5942 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c2 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6320 as c3 } from '../descriptors/data/289.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6186 as c4, d6187 as c5, d6188 as c6, d6189 as c7 } from '../descriptors/data/282.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5667 as c8 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5667 as d5667 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec1687"]:c1(),["SharedCodec1690"]:c2(),["SharedCodec1697"]:c3(),["SharedCodec492"]:c4(),["SharedCodec493"]:c5(),["SharedCodec494"]:c6(),["SharedCodec495"]:c7(),["UpdateCustomerTaxExemptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
