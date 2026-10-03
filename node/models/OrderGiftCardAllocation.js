import { d342 as c0, d1822 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1822 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardMoney"]:c0(),["OrderGiftCardAllocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderGiftCardAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
