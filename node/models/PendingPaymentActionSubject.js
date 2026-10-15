import { d2050 as c0, d2051 as c1, d2052 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2052 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2052;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentActionPaymentIntentSubject"]:c0(),["PendingPaymentActionSetupPaymentSourceSubject"]:c1(),["PendingPaymentActionSubject"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentActionSubject(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
