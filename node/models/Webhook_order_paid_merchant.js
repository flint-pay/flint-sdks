import { d898 as c0, d323 as c1, d500 as c2, d897 as c3, d1551 as c4, d1550 as c5, d1543 as c6, d1542 as c7, d1545 as c8, d1544 as c9, d1547 as c10, d1546 as c11, d1549 as c12, d1548 as c13, d1563 as c14, d1564 as c15 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1564 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["SharedCodec391"]:c4(),["SharedCodec392"]:c5(),["SharedCodec393"]:c6(),["SharedCodec394"]:c7(),["SharedCodec395"]:c8(),["SharedCodec396"]:c9(),["SharedCodec397"]:c10(),["SharedCodec398"]:c11(),["SharedCodec399"]:c12(),["SharedCodec400"]:c13(),["SharedCodec402"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
