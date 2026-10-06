import { d789 as c0, d77 as c1, d1823 as c2, d1822 as c3, d1957 as c4, d1959 as c5, d1958 as c6, d863 as c7, d2311 as c8, d14 as c9, d1821 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2311 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentCollection"]:c4(),["PaymentCollectionStripe"]:c5(),["PaymentCollectionStripeElements"]:c6(),["PaymentErrorSummary"]:c7(),["SelectableOrderPaymentIntent"]:c8(),["SharedCodec1"]:c9(),["SharedCodec487"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSelectableOrderPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
