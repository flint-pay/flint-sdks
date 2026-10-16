import { d2014 as c0, d2015 as c1, d2017 as c2 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2017 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2017;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceAchDebitSummary"]:c0(),["PaymentSourceCardSummary"]:c1(),["PaymentSourceSummary"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
