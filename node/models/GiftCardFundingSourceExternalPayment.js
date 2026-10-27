import { d401 as c0 } from '../descriptors/data/22.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3910 as c1, d3911 as c2 } from '../descriptors/data/165.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d401 as d401 } from '../descriptors/data/22.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPayment"]:c0(),["SharedCodec123"]:c1(),["SharedCodec124"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPayment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
