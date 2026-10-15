import { d757 as c0, d66 as c1, d67 as c2, d2425 as c3, d2426 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2425 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2425;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxID"]:c0(),["PostalAddress"]:c1(),["SharedCodec14"]:c2(),["TaxIdentityPatch"]:c3(),["TaxIdentityRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
