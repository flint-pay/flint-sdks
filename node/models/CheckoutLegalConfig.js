import { d172 as c0, d1753 as c1 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d172 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutLegalConfig"]:c0(),["LegalSettings"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutLegalConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
