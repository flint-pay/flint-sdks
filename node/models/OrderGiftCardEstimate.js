import { d342 as c0, d1822 as c1, d1827 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1827 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardMoney"]:c0(),["OrderGiftCardAllocation"]:c1(),["OrderGiftCardEstimate"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderGiftCardEstimate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
