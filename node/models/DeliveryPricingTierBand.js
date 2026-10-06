import { d663 as c0, d664 as c1, d77 as c2 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d663 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d663;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBand"]:c0(),["DeliveryPricingTierBandRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingTierBand(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
