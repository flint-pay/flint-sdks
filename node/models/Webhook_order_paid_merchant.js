import { d936 as c0, d526 as c1, d935 as c2, d938 as c3, d1569 as c4, d1568 as c5, d1561 as c6, d1560 as c7, d1563 as c8, d1562 as c9, d1565 as c10, d1564 as c11, d1567 as c12, d1566 as c13, d1581 as c14, d1582 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1582 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1582;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec289"]:c3(),["SharedCodec422"]:c4(),["SharedCodec423"]:c5(),["SharedCodec424"]:c6(),["SharedCodec425"]:c7(),["SharedCodec426"]:c8(),["SharedCodec427"]:c9(),["SharedCodec428"]:c10(),["SharedCodec429"]:c11(),["SharedCodec430"]:c12(),["SharedCodec431"]:c13(),["SharedCodec433"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
