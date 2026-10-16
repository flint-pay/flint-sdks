import { d1567 as c0, d898 as c1, d323 as c2, d903 as c3, d500 as c4, d897 as c5, d902 as c6, d1551 as c7, d1550 as c8, d1543 as c9, d1542 as c10, d1545 as c11, d1544 as c12, d1547 as c13, d1546 as c14, d1549 as c15, d1548 as c16, d1563 as c17, d1565 as c18, d1566 as c19, d1564 as c20 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1567 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec252"]:c6(),["SharedCodec391"]:c7(),["SharedCodec392"]:c8(),["SharedCodec393"]:c9(),["SharedCodec394"]:c10(),["SharedCodec395"]:c11(),["SharedCodec396"]:c12(),["SharedCodec397"]:c13(),["SharedCodec398"]:c14(),["SharedCodec399"]:c15(),["SharedCodec400"]:c16(),["SharedCodec402"]:c17(),["SharedCodec403"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
