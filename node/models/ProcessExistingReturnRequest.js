import { d8706 as c0, d8707 as c1 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c2 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c3 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c4, d8709 as c5, d8710 as c6 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10685 as c7, d10684 as c33 } from '../descriptors/data/508.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1616 as c8 } from '../descriptors/data/81.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10692 as c9, d10693 as c10, d10694 as c11, d10695 as c12, d10696 as c13 } from '../descriptors/data/509.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10610 as c14, d10611 as c15, d10613 as c23, d10614 as c24, d10615 as c25, d10616 as c26, d10617 as c27, d10618 as c28, d10619 as c29, d10620 as c30, d10621 as c32 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10543 as c16, d10546 as c18, d10547 as c19, d10548 as c20 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8818 as c17 } from '../descriptors/data/396.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10701 as c21, d10702 as c22 } from '../descriptors/data/510.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9133 as c31 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1616 as d1616 } from '../descriptors/data/81.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1616;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec190"]:c17(),["SharedCodec2673"]:c18(),["SharedCodec2674"]:c19(),["SharedCodec2675"]:c20(),["SharedCodec2696"]:c21(),["SharedCodec2697"]:c22(),["SharedCodec2770"]:c23(),["SharedCodec2771"]:c24(),["SharedCodec2772"]:c25(),["SharedCodec2773"]:c26(),["SharedCodec2774"]:c27(),["SharedCodec2776"]:c28(),["SharedCodec2777"]:c29(),["SharedCodec2778"]:c30(),["SharedCodec451"]:c31(),["SharedCodec553"]:c32(),["SharedCodec559"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
