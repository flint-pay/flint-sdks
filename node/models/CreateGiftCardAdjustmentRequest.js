import { d340 as c0, d342 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d340 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d340;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardAdjustmentRequest"]:c0(),["GiftCardMoney"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
