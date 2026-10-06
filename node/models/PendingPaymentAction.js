import { d2028 as c0, d860 as c1, d2330 as c2, d2329 as c3 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2028 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2028;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentAction"]:c0(),["PendingPaymentActionSubject"]:c1(),["StripePaymentClientAction"]:c2(),["StripeSetupIntentClientAction"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
