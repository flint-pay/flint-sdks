import { d184 as c0, d77 as c1, d1871 as c2, d1885 as c3, d2014 as c4, d1868 as c5, d1870 as c6, d1869 as c7, d2008 as c8, d2007 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2014 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2014;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequestConfirmPaymentIntents"]:c4(),["SharedCodec498"]:c5(),["SharedCodec499"]:c6(),["SharedCodec500"]:c7(),["SharedCodec524"]:c8(),["SharedCodec525"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
