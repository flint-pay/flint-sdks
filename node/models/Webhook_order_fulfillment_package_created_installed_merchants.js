import { d938 as c0, d937 as c1, d957 as c2, d958 as c3, d961 as c4, d959 as c5, d960 as c6, d962 as c7, d965 as c8, d966 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d966 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d966;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec296"]:c2(),["SharedCodec297"]:c3(),["SharedCodec298"]:c4(),["SharedCodec299"]:c5(),["SharedCodec300"]:c6(),["SharedCodec301"]:c7(),["SharedCodec302"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
