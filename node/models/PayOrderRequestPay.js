import { d144 as c0, d323 as c1, d1867 as c2, d2012 as c3, d1999 as c4, d1864 as c5, d1866 as c6, d1865 as c7, d2005 as c8, d2004 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2012 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2012;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["PayOrderRequestPay"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec474"]:c5(),["SharedCodec475"]:c6(),["SharedCodec476"]:c7(),["SharedCodec499"]:c8(),["SharedCodec500"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
