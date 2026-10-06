import { d938 as c0, d932 as c1, d937 as c2, d1430 as c3, d1431 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1431 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec285"]:c1(),["SharedCodec287"]:c2(),["SharedCodec394"]:c3(),["Webhook_invoice_collection_block_resolved_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_collection_block_resolved_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
