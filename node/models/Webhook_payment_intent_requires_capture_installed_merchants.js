import { d938 as c0, d933 as c1, d932 as c2, d936 as c3, d937 as c4, d1113 as c5 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1113 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1113;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec285"]:c2(),["SharedCodec286"]:c3(),["SharedCodec287"]:c4(),["Webhook_payment_intent_requires_capture_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_requires_capture_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
