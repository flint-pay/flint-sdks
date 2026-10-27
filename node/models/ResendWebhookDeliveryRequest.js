import { d901 as c0 } from '../descriptors/data/39.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d901 as d901 } from '../descriptors/data/39.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResendWebhookDeliveryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResendWebhookDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
