import { d936 as c0, d526 as c1, d935 as c2, d938 as c3, d1570 as c4, d1569 as c5, d1568 as c6, d1561 as c7, d1560 as c8, d1563 as c9, d1562 as c10, d1565 as c11, d1564 as c12, d1567 as c13, d1566 as c14, d1571 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1571 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1571;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec289"]:c3(),["SharedCodec421"]:c4(),["SharedCodec422"]:c5(),["SharedCodec423"]:c6(),["SharedCodec424"]:c7(),["SharedCodec425"]:c8(),["SharedCodec426"]:c9(),["SharedCodec427"]:c10(),["SharedCodec428"]:c11(),["SharedCodec429"]:c12(),["SharedCodec430"]:c13(),["SharedCodec431"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
