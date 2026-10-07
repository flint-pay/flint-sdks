import { d774 as c0, d73 as c1, d74 as c2, d2407 as c3, d2410 as c4, d2409 as c5, d2408 as c6, d2376 as c7, d2411 as c8 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2411 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2411;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxID"]:c0(),["PostalAddress"]:c1(),["SharedCodec19"]:c2(),["SharedCodec628"]:c3(),["SharedCodec629"]:c4(),["SharedCodec630"]:c5(),["SharedCodec631"]:c6(),["TaxIdentityRequest"]:c7(),["UpdateCustomerRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
