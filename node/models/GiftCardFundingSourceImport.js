import { d406 as c0 } from '../descriptors/data/22.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3911 as c1 } from '../descriptors/data/165.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3917 as c2 } from '../descriptors/data/166.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d406 as d406 } from '../descriptors/data/22.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImport"]:c0(),["SharedCodec124"]:c1(),["SharedCodec130"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
