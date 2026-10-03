import { d864 as c0, d857 as c1 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d864 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d864;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingLossDisposition"]:c0(),["SharedCodec265"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingLossDisposition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
