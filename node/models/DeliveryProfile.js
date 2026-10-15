import { d649 as c0, d652 as c1, d659 as c2, d661 as c3, d748 as c4, d2662 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d649 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfile"]:c0(),["DeliveryProfileConfiguration"]:c1(),["DeliveryProfileDiagnostics"]:c2(),["DeliveryProfileOriginPolicy"]:c3(),["Dimensions"]:c4(),["Weight"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfile(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
