import { d6358 as c0, d6349 as c3, d6359 as c7, d6360 as c8, d6350 as c12 } from '../descriptors/data/291.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6039 as c1, d6040 as c2 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5943 as c4, d5944 as c5, d5942 as c6 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6317 as c9, d6318 as c10, d6319 as c11 } from '../descriptors/data/289.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5666 as c13 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5666 as d5666 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5666;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1685"]:c4(),["SharedCodec1686"]:c5(),["SharedCodec1687"]:c6(),["SharedCodec1692"]:c7(),["SharedCodec1693"]:c8(),["SharedCodec1694"]:c9(),["SharedCodec1695"]:c10(),["SharedCodec1696"]:c11(),["SharedCodec999"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
