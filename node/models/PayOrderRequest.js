import { d144 as c0, d323 as c1, d1867 as c2, d1883 as c3, d2010 as c4, d1999 as c5, d1864 as c6, d1866 as c7, d1865 as c8, d2006 as c9, d2005 as c10, d2004 as c11, d2007 as c12, d2008 as c13, d2009 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2010 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec474"]:c6(),["SharedCodec475"]:c7(),["SharedCodec476"]:c8(),["SharedCodec498"]:c9(),["SharedCodec499"]:c10(),["SharedCodec500"]:c11(),["SharedCodec501"]:c12(),["SharedCodec502"]:c13(),["SharedCodec503"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
