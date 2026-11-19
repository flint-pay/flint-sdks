import { d395 as c0 } from '../descriptors/data/24.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8706 as c1, d8707 as c2 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c3 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c4 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8708 as c5, d8709 as c6, d8710 as c7 } from '../descriptors/data/390.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10610 as c8, d10611 as c9, d10606 as c10, d10613 as c13, d10614 as c14, d10615 as c15, d10616 as c16, d10617 as c17, d10618 as c18, d10619 as c19, d10620 as c20, d10621 as c21, d10607 as c22, d10608 as c23, d10609 as c24 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9687 as c11, d9688 as c28 } from '../descriptors/data/448.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8818 as c12 } from '../descriptors/data/396.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10684 as c25 } from '../descriptors/data/508.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10676 as c26, d10677 as c27 } from '../descriptors/data/507.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d395 as d395 } from '../descriptors/data/24.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["OrderDraftLineItemTaxCalculationRequestModel"]:c5(),["OrderDraftTaxComponentRequestModel"]:c6(),["OrderDraftTaxJurisdictionRequestModel"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["ReturnResolutionAdjustmentRequest"]:c10(),["ReturnResolutionLineItemRequest"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2770"]:c13(),["SharedCodec2771"]:c14(),["SharedCodec2772"]:c15(),["SharedCodec2773"]:c16(),["SharedCodec2774"]:c17(),["SharedCodec2776"]:c18(),["SharedCodec2777"]:c19(),["SharedCodec2778"]:c20(),["SharedCodec553"]:c21(),["SharedCodec555"]:c22(),["SharedCodec557"]:c23(),["SharedCodec558"]:c24(),["SharedCodec559"]:c25(),["SharedCodec560"]:c26(),["SharedCodec561"]:c27(),["SharedCodec98"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
