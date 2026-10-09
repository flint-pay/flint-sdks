import { d323 as c0, d1875 as c1, d1983 as c2, d1977 as c3, d1976 as c4, d1979 as c5, d1978 as c6, d1981 as c7, d1980 as c8, d1982 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1983 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1983;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItem"]:c2(),["SharedCodec491"]:c3(),["SharedCodec492"]:c4(),["SharedCodec493"]:c5(),["SharedCodec494"]:c6(),["SharedCodec495"]:c7(),["SharedCodec496"]:c8(),["SharedCodec497"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
