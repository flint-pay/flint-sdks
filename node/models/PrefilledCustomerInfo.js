import { d65 as c0, d1842 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1842 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["PrefilledCustomerInfo"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePrefilledCustomerInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
