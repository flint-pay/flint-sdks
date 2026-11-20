import { d9690 as c0, d9692 as c9, d9694 as c10, d9699 as c16, d9701 as c17, d9702 as c18, d9703 as c19 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d387 as c1 } from '../descriptors/data/23.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10623 as c2 } from '../descriptors/data/503.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8719 as c3, d8720 as c4, d8721 as c6, d8722 as c7, d8723 as c8 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c5 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10641 as c11, d10642 as c12, d10637 as c13, d10644 as c20, d10645 as c21, d10635 as c29, d10638 as c30, d10636 as c31, d10639 as c32, d10640 as c33 } from '../descriptors/data/504.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9710 as c14, d9708 as c34, d9711 as c35 } from '../descriptors/data/449.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8831 as c15 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10646 as c22, d10647 as c23, d10648 as c24, d10649 as c25, d10650 as c26, d10651 as c27, d10652 as c28 } from '../descriptors/data/505.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d387 as d387 } from '../descriptors/data/23.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec190"]:c15(),["SharedCodec2669"]:c16(),["SharedCodec2671"]:c17(),["SharedCodec2672"]:c18(),["SharedCodec2673"]:c19(),["SharedCodec2778"]:c20(),["SharedCodec2779"]:c21(),["SharedCodec2780"]:c22(),["SharedCodec2781"]:c23(),["SharedCodec2782"]:c24(),["SharedCodec2784"]:c25(),["SharedCodec2785"]:c26(),["SharedCodec2786"]:c27(),["SharedCodec554"]:c28(),["SharedCodec555"]:c29(),["SharedCodec556"]:c30(),["SharedCodec557"]:c31(),["SharedCodec558"]:c32(),["SharedCodec559"]:c33(),["SharedCodec95"]:c34(),["SharedCodec98"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
