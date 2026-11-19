import { d8050 as c0 } from '../descriptors/data/349.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8217 as c1, d8218 as c2, d8219 as c3 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8050 as d8050 } from '../descriptors/data/349.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8050;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionDiscount"]:c0(),["PromotionRefInputPromotionCode"]:c1(),["PromotionRefInputPromotionID"]:c2(),["PromotionRefRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionDiscount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
