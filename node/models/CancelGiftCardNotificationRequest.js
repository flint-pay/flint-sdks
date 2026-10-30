import { d97 as c0 } from '../descriptors/data/4.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d97 as d97 } from '../descriptors/data/4.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d97;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelGiftCardNotificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelGiftCardNotificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
