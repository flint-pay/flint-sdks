import { d157 as c0, d65 as c1, d1842 as c2 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d157 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomerConfig"]:c0(),["PostalAddress"]:c1(),["PrefilledCustomerInfo"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutCustomerConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
