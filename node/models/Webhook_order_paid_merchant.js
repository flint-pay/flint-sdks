import { d930 as c0, d525 as c1, d929 as c2, d932 as c3, d1562 as c4, d1561 as c5, d1554 as c6, d1553 as c7, d1556 as c8, d1555 as c9, d1558 as c10, d1557 as c11, d1560 as c12, d1559 as c13, d1574 as c14, d1575 as c15 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1575 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1575;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec285"]:c3(),["SharedCodec417"]:c4(),["SharedCodec418"]:c5(),["SharedCodec419"]:c6(),["SharedCodec420"]:c7(),["SharedCodec421"]:c8(),["SharedCodec422"]:c9(),["SharedCodec423"]:c10(),["SharedCodec424"]:c11(),["SharedCodec425"]:c12(),["SharedCodec426"]:c13(),["SharedCodec428"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
