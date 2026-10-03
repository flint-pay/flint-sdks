import { d909 as c0, d515 as c1, d908 as c2, d911 as c3, d1531 as c4, d1530 as c5, d1523 as c6, d1522 as c7, d1525 as c8, d1524 as c9, d1527 as c10, d1526 as c11, d1529 as c12, d1528 as c13, d1543 as c14, d1544 as c15 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1544 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec278"]:c3(),["SharedCodec410"]:c4(),["SharedCodec411"]:c5(),["SharedCodec412"]:c6(),["SharedCodec413"]:c7(),["SharedCodec414"]:c8(),["SharedCodec415"]:c9(),["SharedCodec416"]:c10(),["SharedCodec417"]:c11(),["SharedCodec418"]:c12(),["SharedCodec419"]:c13(),["SharedCodec421"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
