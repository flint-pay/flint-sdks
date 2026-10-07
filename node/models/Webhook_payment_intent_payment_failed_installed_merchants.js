import { d938 as c0, d933 as c1, d932 as c2, d936 as c3, d937 as c4, d1422 as c5 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1422 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec285"]:c2(),["SharedCodec286"]:c3(),["SharedCodec287"]:c4(),["Webhook_payment_intent_payment_failed_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_payment_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
