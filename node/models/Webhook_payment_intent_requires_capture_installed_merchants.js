import { d917 as c0, d912 as c1, d911 as c2, d915 as c3, d916 as c4, d1088 as c5 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1088 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1088;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec277"]:c1(),["SharedCodec278"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["Webhook_payment_intent_requires_capture_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_requires_capture_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
