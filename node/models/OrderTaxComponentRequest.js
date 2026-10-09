import { d323 as c0, d1895 as c1, d1897 as c2, d336 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1895 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1895;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxComponentRequest"]:c1(),["OrderTaxJurisdictionRequest"]:c2(),["SharedCodec104"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxComponentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
