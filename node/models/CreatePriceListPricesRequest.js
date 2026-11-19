import { d359 as c0 } from '../descriptors/data/21.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10294 as c2, d10306 as c3 } from '../descriptors/data/479.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d359 as d359 } from '../descriptors/data/21.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePriceListPricesRequest"]:c0(),["MoneyValue"]:c1(),["PriceListPriceRequest"]:c2(),["QuantityPriceBreakRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePriceListPricesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
