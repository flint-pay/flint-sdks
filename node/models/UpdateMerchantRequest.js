import { d896 as c0, d66 as c1, d2510 as c2, d2511 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2511 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["PostalAddress"]:c1(),["SharedCodec638"]:c2(),["UpdateMerchantRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
