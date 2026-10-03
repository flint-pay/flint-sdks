import { d917 as c0, d916 as c1, d920 as c2, d936 as c3, d937 as c4, d940 as c5, d938 as c6, d939 as c7, d941 as c8, d1290 as c9, d1293 as c10, d1294 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1294 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec282"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec291"]:c5(),["SharedCodec292"]:c6(),["SharedCodec293"]:c7(),["SharedCodec294"]:c8(),["SharedCodec361"]:c9(),["SharedCodec362"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
