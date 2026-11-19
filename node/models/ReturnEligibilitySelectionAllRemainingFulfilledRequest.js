import { d9670 as c0, d9676 as c2 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1800 as c1 } from '../descriptors/data/89.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1800 as d1800 } from '../descriptors/data/89.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1800;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionAllRemainingFulfilledRequest"]:c1(),["SharedCodec2662"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionAllRemainingFulfilledRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
