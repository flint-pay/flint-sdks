import { d577 as c0, d578 as c1, d323 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d577 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFixedPricingStrategy"]:c0(),["DeliveryFixedPricingStrategyRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryFixedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
