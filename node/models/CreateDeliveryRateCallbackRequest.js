import { d303 as c0, d675 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d303 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRateCallbackRequest"]:c0(),["DeliveryRateCallbackConfiguration"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
