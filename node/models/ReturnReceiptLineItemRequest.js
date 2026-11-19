import { d10636 as c0, d10637 as c2, d10638 as c3, d10639 as c4, d10640 as c5, d10641 as c6, d10642 as c7 } from '../descriptors/data/505.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10652 as c1 } from '../descriptors/data/506.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10636 as d10636 } from '../descriptors/data/505.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10636;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2747"]:c2(),["SharedCodec2748"]:c3(),["SharedCodec2749"]:c4(),["SharedCodec2754"]:c5(),["SharedCodec2755"]:c6(),["SharedCodec2756"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
