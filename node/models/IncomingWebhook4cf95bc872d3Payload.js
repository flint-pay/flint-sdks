import { d1089 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d1085 as c6, d1087 as c7, d1088 as c8, d1086 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1089 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1089;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook4cf95bc872d3Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec293"]:c6(),["SharedCodec294"]:c7(),["Webhook_order_inventory_exception_resolved_installed_merchants"]:c8(),["Webhook_order_inventory_exception_resolved_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook4cf95bc872d3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
