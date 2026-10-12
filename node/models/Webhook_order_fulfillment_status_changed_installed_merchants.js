import { d901 as c0, d900 as c1, d920 as c2, d921 as c3, d1296 as c4, d1299 as c5, d1300 as c6 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1300 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec260"]:c2(),["SharedCodec261"]:c3(),["SharedCodec339"]:c4(),["SharedCodec340"]:c5(),["Webhook_order_fulfillment_status_changed_installed_merchants"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_status_changed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
