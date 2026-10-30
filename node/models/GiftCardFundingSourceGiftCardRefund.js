import { d633 as c0 } from '../descriptors/data/33.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5317 as c1 } from '../descriptors/data/239.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d633 as d633 } from '../descriptors/data/33.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d633;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardRefund"]:c0(),["SharedCodec213"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
