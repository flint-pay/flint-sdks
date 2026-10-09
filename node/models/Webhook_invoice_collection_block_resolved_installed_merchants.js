import { d901 as c0, d895 as c1, d900 as c2, d1418 as c3, d1419 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1419 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1419;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec251"]:c2(),["SharedCodec368"]:c3(),["Webhook_invoice_collection_block_resolved_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_collection_block_resolved_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
