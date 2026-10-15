import { d652 as c0, d661 as c1, d748 as c2, d2662 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d652 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d652;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfiguration"]:c0(),["DeliveryProfileOriginPolicy"]:c1(),["Dimensions"]:c2(),["Weight"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
