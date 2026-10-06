import { d938 as c0, d932 as c1, d937 as c2, d1108 as c3, d1109 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1109 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec285"]:c1(),["SharedCodec287"]:c2(),["SharedCodec330"]:c3(),["Webhook_invoice_marked_uncollectible_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_marked_uncollectible_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
