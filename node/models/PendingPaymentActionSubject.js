import { d2050 as c0, d2051 as c1, d2052 as c2 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2052 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2052;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentActionPaymentIntentSubject"]:c0(),["PendingPaymentActionSetupPaymentSourceSubject"]:c1(),["PendingPaymentActionSubject"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentActionSubject(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
