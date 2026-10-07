import { d179 as c0, d77 as c1, d1865 as c2, d1879 as c3, d2007 as c4, d1996 as c5, d1862 as c6, d1864 as c7, d1863 as c8, d2003 as c9, d2002 as c10, d2001 as c11, d2004 as c12, d2005 as c13, d2006 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2007 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2007;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec494"]:c6(),["SharedCodec495"]:c7(),["SharedCodec496"]:c8(),["SharedCodec519"]:c9(),["SharedCodec520"]:c10(),["SharedCodec521"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13(),["SharedCodec524"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
