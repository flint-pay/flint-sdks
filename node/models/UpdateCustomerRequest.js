import { d757 as c0, d66 as c1, d67 as c2, d2458 as c3, d2461 as c4, d2460 as c5, d2459 as c6, d2426 as c7, d2462 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2462 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxID"]:c0(),["PostalAddress"]:c1(),["SharedCodec14"]:c2(),["SharedCodec609"]:c3(),["SharedCodec610"]:c4(),["SharedCodec611"]:c5(),["SharedCodec612"]:c6(),["TaxIdentityRequest"]:c7(),["UpdateCustomerRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
