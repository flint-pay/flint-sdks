import { d738 as c0, d739 as c1, d77 as c2 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d738 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d738;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeightUnitPrice"]:c0(),["DeliveryWeightUnitPriceRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeightUnitPrice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
