import { d522 as c0, d531 as c1, d765 as c2, d77 as c3, d73 as c4, d76 as c5, d74 as c6, d75 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d522 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d522;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MoneyValue"]:c3(),["PostalAddress"]:c4(),["SharedCodec18"]:c5(),["SharedCodec19"]:c6(),["TaxIdentity"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
