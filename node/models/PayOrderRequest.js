import { d184 as c0, d77 as c1, d1871 as c2, d1885 as c3, d2013 as c4, d2002 as c5, d1868 as c6, d1870 as c7, d1869 as c8, d2009 as c9, d2008 as c10, d2007 as c11, d2010 as c12, d2011 as c13, d2012 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2013 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2013;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec498"]:c6(),["SharedCodec499"]:c7(),["SharedCodec500"]:c8(),["SharedCodec523"]:c9(),["SharedCodec524"]:c10(),["SharedCodec525"]:c11(),["SharedCodec526"]:c12(),["SharedCodec527"]:c13(),["SharedCodec528"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
