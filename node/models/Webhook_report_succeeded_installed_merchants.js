import { d938 as c0, d937 as c1, d1550 as c2, d1545 as c3, d1547 as c4, d1546 as c5, d1548 as c6, d1549 as c7, d1551 as c8 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1551 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec410"]:c2(),["SharedCodec411"]:c3(),["SharedCodec412"]:c4(),["SharedCodec413"]:c5(),["SharedCodec414"]:c6(),["SharedCodec415"]:c7(),["Webhook_report_succeeded_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
