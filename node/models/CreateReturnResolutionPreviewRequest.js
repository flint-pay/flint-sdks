import { d10592 as c0, d10604 as c21 } from '../descriptors/data/502.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8706 as c1, d8707 as c2 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c3 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c4, d8709 as c5, d8710 as c6 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10610 as c7, d10611 as c8, d10606 as c9, d10613 as c12, d10614 as c13, d10615 as c14, d10616 as c15, d10617 as c16, d10618 as c17, d10619 as c18, d10620 as c19, d10621 as c20, d10607 as c22, d10605 as c23, d10608 as c24, d10609 as c25 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9687 as c10, d9688 as c26 } from '../descriptors/data/448.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8818 as c11 } from '../descriptors/data/396.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10592 as d10592 } from '../descriptors/data/502.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["ReturnReplacementTaxRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2770"]:c12(),["SharedCodec2771"]:c13(),["SharedCodec2772"]:c14(),["SharedCodec2773"]:c15(),["SharedCodec2774"]:c16(),["SharedCodec2776"]:c17(),["SharedCodec2777"]:c18(),["SharedCodec2778"]:c19(),["SharedCodec553"]:c20(),["SharedCodec554"]:c21(),["SharedCodec555"]:c22(),["SharedCodec556"]:c23(),["SharedCodec557"]:c24(),["SharedCodec558"]:c25(),["SharedCodec98"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
