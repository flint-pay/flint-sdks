import { d142 as c0, d77 as c1, d1993 as c2, d1994 as c3, d1996 as c4 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d142 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentIntentSummary"]:c0(),["MoneyValue"]:c1(),["PaymentSourceAchDebitSummary"]:c2(),["PaymentSourceCardSummary"]:c3(),["PaymentSourceSummary"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedPaymentIntentSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
