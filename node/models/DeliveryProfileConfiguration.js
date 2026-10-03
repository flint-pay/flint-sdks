import { d652 as c0, d650 as c1, d649 as c2, d651 as c3 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d652 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d652;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfiguration"]:c0(),["DeliveryProfileOriginPolicy"]:c1(),["Dimensions"]:c2(),["Weight"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
