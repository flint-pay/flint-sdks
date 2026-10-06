import { d179 as c0, d77 as c1, d1864 as c2, d1878 as c3, d2006 as c4, d1995 as c5, d1861 as c6, d1863 as c7, d1862 as c8, d2002 as c9, d2001 as c10, d2000 as c11, d2003 as c12, d2004 as c13, d2005 as c14 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2006 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec493"]:c6(),["SharedCodec494"]:c7(),["SharedCodec495"]:c8(),["SharedCodec518"]:c9(),["SharedCodec519"]:c10(),["SharedCodec520"]:c11(),["SharedCodec521"]:c12(),["SharedCodec522"]:c13(),["SharedCodec523"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
