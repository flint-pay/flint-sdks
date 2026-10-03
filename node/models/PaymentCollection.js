import { d774 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1918 as c4, d1920 as c5, d1919 as c6, d842 as c7, d2272 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1918 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentCollection"]:c4(),["PaymentCollectionStripe"]:c5(),["PaymentCollectionStripeElements"]:c6(),["PaymentErrorSummary"]:c7(),["SelectableOrderPaymentIntent"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
