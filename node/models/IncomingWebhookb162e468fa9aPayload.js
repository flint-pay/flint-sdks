import { d1369 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d920 as c6, d936 as c7, d937 as c8, d941 as c9, d1365 as c10, d1364 as c11, d1367 as c12, d1368 as c13, d1366 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1369 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec282"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["SharedCodec294"]:c9(),["SharedCodec380"]:c10(),["SharedCodec381"]:c11(),["SharedCodec382"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
