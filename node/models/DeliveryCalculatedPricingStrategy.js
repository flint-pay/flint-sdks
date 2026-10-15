import { d569 as c0, d579 as c1, d721 as c2, d323 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d569 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategy"]:c0(),["DeliveryDistanceUnitPrice"]:c1(),["DeliveryWeightUnitPrice"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCalculatedPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
