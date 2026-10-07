import { d780 as c0, d73 as c1, d74 as c2, d2413 as c3, d2416 as c4, d2415 as c5, d2414 as c6, d2382 as c7, d2417 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2417 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxID"]:c0(),["PostalAddress"]:c1(),["SharedCodec19"]:c2(),["SharedCodec632"]:c3(),["SharedCodec633"]:c4(),["SharedCodec634"]:c5(),["SharedCodec635"]:c6(),["TaxIdentityRequest"]:c7(),["UpdateCustomerRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
