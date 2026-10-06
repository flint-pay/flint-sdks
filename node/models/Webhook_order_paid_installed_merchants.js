import { d938 as c0, d932 as c1, d937 as c2, d1562 as c3, d1561 as c4, d1554 as c5, d1553 as c6, d1556 as c7, d1555 as c8, d1558 as c9, d1557 as c10, d1560 as c11, d1559 as c12, d1576 as c13, d1577 as c14 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1577 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec285"]:c1(),["SharedCodec287"]:c2(),["SharedCodec417"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["SharedCodec420"]:c6(),["SharedCodec421"]:c7(),["SharedCodec422"]:c8(),["SharedCodec423"]:c9(),["SharedCodec424"]:c10(),["SharedCodec425"]:c11(),["SharedCodec426"]:c12(),["SharedCodec429"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
