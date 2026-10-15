import { d1982 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1982 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1982;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomerConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomerConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
