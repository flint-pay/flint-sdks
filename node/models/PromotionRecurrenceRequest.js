import { d10434 as c0 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9684 as c1, d9685 as c2, d9686 as c3, d9687 as c4, d9688 as c5 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10434 as d10434 } from '../descriptors/data/491.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec2429"]:c1(),["SharedCodec2430"]:c2(),["SharedCodec2431"]:c3(),["SharedCodec2432"]:c4(),["SharedCodec2433"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
