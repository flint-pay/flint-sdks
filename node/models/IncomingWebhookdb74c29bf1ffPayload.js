import { d1490 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d934 as c5, d933 as c6, d932 as c7, d936 as c8, d937 as c9, d1489 as c10, d1488 as c11 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1490 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1490;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdb74c29bf1ffPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec283"]:c5(),["SharedCodec284"]:c6(),["SharedCodec285"]:c7(),["SharedCodec286"]:c8(),["SharedCodec287"]:c9(),["Webhook_payment_intent_processing_installed_merchants"]:c10(),["Webhook_payment_intent_processing_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdb74c29bf1ffPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
