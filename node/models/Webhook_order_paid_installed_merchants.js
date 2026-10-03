import { d919 as c0, d913 as c1, d918 as c2, d1533 as c3, d1532 as c4, d1525 as c5, d1524 as c6, d1527 as c7, d1526 as c8, d1529 as c9, d1528 as c10, d1531 as c11, d1530 as c12, d1547 as c13, d1548 as c14 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1548 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1548;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec278"]:c1(),["SharedCodec280"]:c2(),["SharedCodec410"]:c3(),["SharedCodec411"]:c4(),["SharedCodec412"]:c5(),["SharedCodec413"]:c6(),["SharedCodec414"]:c7(),["SharedCodec415"]:c8(),["SharedCodec416"]:c9(),["SharedCodec417"]:c10(),["SharedCodec418"]:c11(),["SharedCodec419"]:c12(),["SharedCodec422"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
