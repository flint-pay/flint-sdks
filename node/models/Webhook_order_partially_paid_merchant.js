import { d898 as c0, d323 as c1, d500 as c2, d897 as c3, d1552 as c4, d1551 as c5, d1550 as c6, d1543 as c7, d1542 as c8, d1545 as c9, d1544 as c10, d1547 as c11, d1546 as c12, d1549 as c13, d1548 as c14, d1553 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1553 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec176"]:c2(),["SharedCodec250"]:c3(),["SharedCodec390"]:c4(),["SharedCodec391"]:c5(),["SharedCodec392"]:c6(),["SharedCodec393"]:c7(),["SharedCodec394"]:c8(),["SharedCodec395"]:c9(),["SharedCodec396"]:c10(),["SharedCodec397"]:c11(),["SharedCodec398"]:c12(),["SharedCodec399"]:c13(),["SharedCodec400"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
