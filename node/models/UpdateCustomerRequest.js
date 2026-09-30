import { d709 as c0, d65 as c1, d66 as c2, d2196 as c3, d2199 as c4, d2198 as c5, d2197 as c6, d2169 as c7, d2200 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2200 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxID"]:c0(),["PostalAddress"]:c1(),["SharedCodec18"]:c2(),["SharedCodec561"]:c3(),["SharedCodec562"]:c4(),["SharedCodec563"]:c5(),["SharedCodec564"]:c6(),["TaxIdentityRequest"]:c7(),["UpdateCustomerRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
