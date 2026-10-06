import { d1521 as c0, d930 as c1, d525 as c2, d929 as c3, d1520 as c4, d1518 as c5, d1517 as c6, d1516 as c7, d1519 as c8, d2561 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1521 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1521;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke817b6292432Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec401"]:c4(),["SharedCodec402"]:c5(),["SharedCodec403"]:c6(),["SharedCodec404"]:c7(),["SharedCodec405"]:c8(),["Webhook_merchant_readiness_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke817b6292432Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
