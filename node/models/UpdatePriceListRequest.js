import { d5942 as c0 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c1 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8160 as c2 } from '../descriptors/data/396.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5705 as c3 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5705 as d5705 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1687"]:c0(),["SharedCodec1690"]:c1(),["SharedCodec1775"]:c2(),["UpdatePriceListRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePriceListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
