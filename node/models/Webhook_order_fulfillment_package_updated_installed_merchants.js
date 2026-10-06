import { d938 as c0, d937 as c1, d941 as c2, d957 as c3, d958 as c4, d961 as c5, d959 as c6, d960 as c7, d962 as c8, d1321 as c9, d1324 as c10, d1325 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1325 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec289"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec298"]:c5(),["SharedCodec299"]:c6(),["SharedCodec300"]:c7(),["SharedCodec301"]:c8(),["SharedCodec369"]:c9(),["SharedCodec370"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
