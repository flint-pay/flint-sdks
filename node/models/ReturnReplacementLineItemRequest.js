import { d8706 as c0, d8707 as c1 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c3, d8709 as c4, d8710 as c5 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10610 as c6, d10611 as c7, d10613 as c9, d10614 as c10, d10615 as c11, d10616 as c12, d10617 as c13, d10618 as c14, d10619 as c15, d10620 as c16 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8818 as c8 } from '../descriptors/data/396.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10610 as d10610 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnReplacementTaxRequest"]:c7(),["SharedCodec190"]:c8(),["SharedCodec2770"]:c9(),["SharedCodec2771"]:c10(),["SharedCodec2772"]:c11(),["SharedCodec2773"]:c12(),["SharedCodec2774"]:c13(),["SharedCodec2776"]:c14(),["SharedCodec2777"]:c15(),["SharedCodec2778"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
