import { d917 as c0, d911 as c1, d916 as c2, d1531 as c3, d1530 as c4, d1523 as c5, d1522 as c6, d1525 as c7, d1524 as c8, d1527 as c9, d1526 as c10, d1529 as c11, d1528 as c12, d1534 as c13, d1535 as c14 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1535 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1535;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec278"]:c1(),["SharedCodec280"]:c2(),["SharedCodec410"]:c3(),["SharedCodec411"]:c4(),["SharedCodec412"]:c5(),["SharedCodec413"]:c6(),["SharedCodec414"]:c7(),["SharedCodec415"]:c8(),["SharedCodec416"]:c9(),["SharedCodec417"]:c10(),["SharedCodec418"]:c11(),["SharedCodec419"]:c12(),["SharedCodec420"]:c13(),["Webhook_order_partially_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
