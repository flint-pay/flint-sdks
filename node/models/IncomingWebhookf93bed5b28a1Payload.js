import { d1578 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1562 as c7, d1561 as c8, d1554 as c9, d1553 as c10, d1556 as c11, d1555 as c12, d1558 as c13, d1557 as c14, d1560 as c15, d1559 as c16, d1574 as c17, d1576 as c18, d1577 as c19, d1575 as c20 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1578 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec417"]:c7(),["SharedCodec418"]:c8(),["SharedCodec419"]:c9(),["SharedCodec420"]:c10(),["SharedCodec421"]:c11(),["SharedCodec422"]:c12(),["SharedCodec423"]:c13(),["SharedCodec424"]:c14(),["SharedCodec425"]:c15(),["SharedCodec426"]:c16(),["SharedCodec428"]:c17(),["SharedCodec429"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
