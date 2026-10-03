import { d946 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d942 as c6, d936 as c7, d937 as c8, d940 as c9, d938 as c10, d939 as c11, d941 as c12, d944 as c13, d945 as c14, d943 as c15 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d946 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d946;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec288"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["SharedCodec291"]:c9(),["SharedCodec292"]:c10(),["SharedCodec293"]:c11(),["SharedCodec294"]:c12(),["SharedCodec295"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
