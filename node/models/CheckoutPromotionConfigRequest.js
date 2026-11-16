import { d6154 as c0 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6154 as d6154 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutPromotionConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutPromotionConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
