import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8170 as c1, d8159 as c2 } from '../descriptors/data/396.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5704 as c3 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5704 as d5704 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["QuantityPriceBreakRequest"]:c1(),["SharedCodec1774"]:c2(),["UpdatePriceListPriceRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePriceListPriceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
