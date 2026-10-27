import { d406 as c0 } from '../descriptors/data/22.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3911 as c1 } from '../descriptors/data/165.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3917 as c2 } from '../descriptors/data/166.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d406 as d406 } from '../descriptors/data/22.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImport"]:c0(),["SharedCodec124"]:c1(),["SharedCodec130"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
