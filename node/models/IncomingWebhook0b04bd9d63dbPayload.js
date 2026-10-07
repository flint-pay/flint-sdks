import { d909 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d905 as c6, d899 as c7, d900 as c8, d903 as c9, d901 as c10, d902 as c11, d904 as c12, d907 as c13, d908 as c14, d906 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d909 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d909;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec250"]:c6(),["SharedCodec251"]:c7(),["SharedCodec252"]:c8(),["SharedCodec253"]:c9(),["SharedCodec254"]:c10(),["SharedCodec255"]:c11(),["SharedCodec256"]:c12(),["SharedCodec257"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
