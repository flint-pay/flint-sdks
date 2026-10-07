import { d944 as c0, d938 as c1, d943 as c2, d1569 as c3, d1568 as c4, d1561 as c5, d1560 as c6, d1563 as c7, d1562 as c8, d1565 as c9, d1564 as c10, d1567 as c11, d1566 as c12, d1583 as c13, d1584 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1584 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1584;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec289"]:c1(),["SharedCodec291"]:c2(),["SharedCodec422"]:c3(),["SharedCodec423"]:c4(),["SharedCodec424"]:c5(),["SharedCodec425"]:c6(),["SharedCodec426"]:c7(),["SharedCodec427"]:c8(),["SharedCodec428"]:c9(),["SharedCodec429"]:c10(),["SharedCodec430"]:c11(),["SharedCodec431"]:c12(),["SharedCodec434"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
