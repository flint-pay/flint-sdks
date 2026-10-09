import { d518 as c0, d520 as c1, d323 as c2, d1820 as c3, d1821 as c4, d66 as c5, d2162 as c6, d2163 as c7, d14 as c8, d1819 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d520 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d520;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAddress"]:c0(),["CustomerAddressResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PostalAddress"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec466"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAddressResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
