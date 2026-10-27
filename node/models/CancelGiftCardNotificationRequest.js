import { d68 as c0 } from '../descriptors/data/2.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d68 as d68 } from '../descriptors/data/2.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d68;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelGiftCardNotificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelGiftCardNotificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
