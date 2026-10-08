import { d901 as c0, d900 as c1, d904 as c2, d920 as c3, d921 as c4, d924 as c5, d922 as c6, d923 as c7, d925 as c8, d1308 as c9, d1311 as c10, d1312 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1312 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec253"]:c2(),["SharedCodec260"]:c3(),["SharedCodec261"]:c4(),["SharedCodec262"]:c5(),["SharedCodec263"]:c6(),["SharedCodec264"]:c7(),["SharedCodec265"]:c8(),["SharedCodec342"]:c9(),["SharedCodec343"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
