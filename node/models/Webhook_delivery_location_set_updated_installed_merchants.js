import { d901 as c0, d900 as c1, d932 as c2, d1394 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1394 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec267"]:c2(),["Webhook_delivery_location_set_updated_installed_merchants"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_delivery_location_set_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
