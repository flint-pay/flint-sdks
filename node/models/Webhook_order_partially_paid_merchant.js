import { d909 as c0, d515 as c1, d908 as c2, d911 as c3, d1532 as c4, d1531 as c5, d1530 as c6, d1523 as c7, d1522 as c8, d1525 as c9, d1524 as c10, d1527 as c11, d1526 as c12, d1529 as c13, d1528 as c14, d1533 as c15 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1533 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec278"]:c3(),["SharedCodec409"]:c4(),["SharedCodec410"]:c5(),["SharedCodec411"]:c6(),["SharedCodec412"]:c7(),["SharedCodec413"]:c8(),["SharedCodec414"]:c9(),["SharedCodec415"]:c10(),["SharedCodec416"]:c11(),["SharedCodec417"]:c12(),["SharedCodec418"]:c13(),["SharedCodec419"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
