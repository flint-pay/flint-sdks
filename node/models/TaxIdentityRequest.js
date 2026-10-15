import { d757 as c0, d66 as c1, d67 as c2, d2426 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2426 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxID"]:c0(),["PostalAddress"]:c1(),["SharedCodec14"]:c2(),["TaxIdentityRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
