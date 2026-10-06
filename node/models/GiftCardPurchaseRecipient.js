import { d892 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d892 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d892;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipient"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRecipient(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
