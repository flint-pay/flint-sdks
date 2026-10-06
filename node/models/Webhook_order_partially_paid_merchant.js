import { d930 as c0, d525 as c1, d929 as c2, d932 as c3, d1563 as c4, d1562 as c5, d1561 as c6, d1554 as c7, d1553 as c8, d1556 as c9, d1555 as c10, d1558 as c11, d1557 as c12, d1560 as c13, d1559 as c14, d1564 as c15 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1564 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec285"]:c3(),["SharedCodec416"]:c4(),["SharedCodec417"]:c5(),["SharedCodec418"]:c6(),["SharedCodec419"]:c7(),["SharedCodec420"]:c8(),["SharedCodec421"]:c9(),["SharedCodec422"]:c10(),["SharedCodec423"]:c11(),["SharedCodec424"]:c12(),["SharedCodec425"]:c13(),["SharedCodec426"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
