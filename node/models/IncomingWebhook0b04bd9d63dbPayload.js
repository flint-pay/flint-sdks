import { d930 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d926 as c6, d920 as c7, d921 as c8, d924 as c9, d922 as c10, d923 as c11, d925 as c12, d928 as c13, d929 as c14, d927 as c15 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d930 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec259"]:c6(),["SharedCodec260"]:c7(),["SharedCodec261"]:c8(),["SharedCodec262"]:c9(),["SharedCodec263"]:c10(),["SharedCodec264"]:c11(),["SharedCodec265"]:c12(),["SharedCodec266"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
