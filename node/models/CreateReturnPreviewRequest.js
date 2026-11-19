import { d9668 as c0, d9670 as c9, d9672 as c10, d9676 as c16, d9678 as c17, d9679 as c18, d9680 as c19 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d384 as c1 } from '../descriptors/data/23.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10592 as c2, d10602 as c28, d10603 as c29, d10604 as c31 } from '../descriptors/data/502.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8706 as c3, d8707 as c4 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c5 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c6, d8709 as c7, d8710 as c8 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10610 as c11, d10611 as c12, d10606 as c13, d10613 as c20, d10614 as c21, d10615 as c22, d10616 as c23, d10617 as c24, d10618 as c25, d10619 as c26, d10620 as c27, d10621 as c30, d10607 as c32, d10605 as c33, d10608 as c34, d10609 as c35 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9687 as c14, d9685 as c36, d9686 as c37, d9688 as c38 } from '../descriptors/data/448.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8818 as c15 } from '../descriptors/data/396.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d384 as d384 } from '../descriptors/data/23.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec190"]:c15(),["SharedCodec2662"]:c16(),["SharedCodec2664"]:c17(),["SharedCodec2665"]:c18(),["SharedCodec2666"]:c19(),["SharedCodec2770"]:c20(),["SharedCodec2771"]:c21(),["SharedCodec2772"]:c22(),["SharedCodec2773"]:c23(),["SharedCodec2774"]:c24(),["SharedCodec2776"]:c25(),["SharedCodec2777"]:c26(),["SharedCodec2778"]:c27(),["SharedCodec551"]:c28(),["SharedCodec552"]:c29(),["SharedCodec553"]:c30(),["SharedCodec554"]:c31(),["SharedCodec555"]:c32(),["SharedCodec556"]:c33(),["SharedCodec557"]:c34(),["SharedCodec558"]:c35(),["SharedCodec95"]:c36(),["SharedCodec97"]:c37(),["SharedCodec98"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
