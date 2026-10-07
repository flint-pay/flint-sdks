import { d796 as c0, d77 as c1, d1830 as c2, d1829 as c3, d1964 as c4, d1966 as c5, d1965 as c6, d869 as c7, d2318 as c8, d14 as c9, d1828 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1964 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1964;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentCollection"]:c4(),["PaymentCollectionStripe"]:c5(),["PaymentCollectionStripeElements"]:c6(),["PaymentErrorSummary"]:c7(),["SelectableOrderPaymentIntent"]:c8(),["SharedCodec1"]:c9(),["SharedCodec492"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
