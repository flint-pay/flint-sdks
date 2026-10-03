import { d774 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1917 as c4, d1919 as c5, d1918 as c6, d842 as c7, d2271 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2271 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentCollection"]:c4(),["PaymentCollectionStripe"]:c5(),["PaymentCollectionStripeElements"]:c6(),["PaymentErrorSummary"]:c7(),["SelectableOrderPaymentIntent"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSelectableOrderPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
