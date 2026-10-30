import { d628 as c0 } from '../descriptors/data/32.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d628 as d628 } from '../descriptors/data/32.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d628;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceAdjustment"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceAdjustment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
