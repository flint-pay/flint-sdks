import { d245 as c0 } from '../descriptors/data/11.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d245 as d245 } from '../descriptors/data/11.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionGiftCardPurchaseVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
