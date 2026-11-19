import { d9670 as c0, d9672 as c1, d9676 as c2, d9678 as c3, d9679 as c4, d9680 as c5 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9672 as d9672 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionRequest"]:c1(),["SharedCodec2662"]:c2(),["SharedCodec2664"]:c3(),["SharedCodec2665"]:c4(),["SharedCodec2666"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
