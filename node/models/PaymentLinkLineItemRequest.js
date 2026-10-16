import { d323 as c0, d1880 as c1, d1999 as c2, d1991 as c3, d1990 as c4, d1993 as c5, d1992 as c6, d1995 as c7, d1994 as c8, d1996 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1999 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1999;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec496"]:c3(),["SharedCodec497"]:c4(),["SharedCodec498"]:c5(),["SharedCodec499"]:c6(),["SharedCodec500"]:c7(),["SharedCodec501"]:c8(),["SharedCodec502"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
