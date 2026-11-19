import { d55 as c0 } from '../descriptors/data/2.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9438 as c1 } from '../descriptors/data/430.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9474 as c2 } from '../descriptors/data/434.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9668 as c3, d9670 as c4, d9672 as c5, d9676 as c11, d9678 as c12, d9679 as c13, d9680 as c14 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9687 as c6, d9685 as c16, d9686 as c18, d9688 as c19 } from '../descriptors/data/448.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9500 as c7, d9501 as c8, d9502 as c9, d9503 as c10 } from '../descriptors/data/437.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9602 as c15, d9603 as c17 } from '../descriptors/data/442.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d55 as d55 } from '../descriptors/data/2.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d55;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec2662"]:c11(),["SharedCodec2664"]:c12(),["SharedCodec2665"]:c13(),["SharedCodec2666"]:c14(),["SharedCodec94"]:c15(),["SharedCodec95"]:c16(),["SharedCodec96"]:c17(),["SharedCodec97"]:c18(),["SharedCodec98"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
