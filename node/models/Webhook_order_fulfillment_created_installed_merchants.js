import { d938 as c0, d937 as c1, d957 as c2, d958 as c3, d1062 as c4, d1373 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1373 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec296"]:c2(),["SharedCodec297"]:c3(),["SharedCodec324"]:c4(),["Webhook_order_fulfillment_created_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
