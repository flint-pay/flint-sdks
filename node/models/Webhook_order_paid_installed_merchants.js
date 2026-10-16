import { d323 as c0, d903 as c1, d902 as c2, d1551 as c3, d1550 as c4, d1543 as c5, d1542 as c6, d1545 as c7, d1544 as c8, d1547 as c9, d1546 as c10, d1549 as c11, d1548 as c12, d1565 as c13, d1566 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1566 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec252"]:c2(),["SharedCodec391"]:c3(),["SharedCodec392"]:c4(),["SharedCodec393"]:c5(),["SharedCodec394"]:c6(),["SharedCodec395"]:c7(),["SharedCodec396"]:c8(),["SharedCodec397"]:c9(),["SharedCodec398"]:c10(),["SharedCodec399"]:c11(),["SharedCodec400"]:c12(),["SharedCodec403"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
