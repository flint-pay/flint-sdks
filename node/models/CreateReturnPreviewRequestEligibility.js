import { d9702 as c0, d9704 as c9, d9706 as c10, d9722 as c14, d9711 as c16, d9713 as c17, d9714 as c18, d9715 as c19, d9720 as c35, d9723 as c36 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d387 as c1 } from '../descriptors/data/23.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10639 as c2 } from '../descriptors/data/503.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8731 as c3, d8732 as c4, d8733 as c6, d8734 as c7, d8735 as c8 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c5 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10657 as c11, d10658 as c12, d10653 as c13, d10660 as c20, d10661 as c21, d10662 as c22, d10663 as c23, d10664 as c24, d10665 as c25, d10666 as c26, d10651 as c30, d10654 as c31, d10652 as c32, d10655 as c33, d10656 as c34 } from '../descriptors/data/504.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8843 as c15 } from '../descriptors/data/396.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10667 as c27, d10668 as c28, d10669 as c29 } from '../descriptors/data/505.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d387 as d387 } from '../descriptors/data/23.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["OrderDraftLineItemTaxCalculationRequestModel"]:c6(),["OrderDraftTaxComponentRequestModel"]:c7(),["OrderDraftTaxJurisdictionRequestModel"]:c8(),["ReturnEligibilityLineItemRequestModel"]:c9(),["ReturnEligibilitySelectionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnReplacementTaxRequest"]:c12(),["ReturnResolutionAdjustmentRequest"]:c13(),["ReturnResolutionLineItemRequest"]:c14(),["SharedCodec191"]:c15(),["SharedCodec2674"]:c16(),["SharedCodec2676"]:c17(),["SharedCodec2677"]:c18(),["SharedCodec2678"]:c19(),["SharedCodec2786"]:c20(),["SharedCodec2787"]:c21(),["SharedCodec2788"]:c22(),["SharedCodec2789"]:c23(),["SharedCodec2790"]:c24(),["SharedCodec2792"]:c25(),["SharedCodec2793"]:c26(),["SharedCodec2794"]:c27(),["SharedCodec558"]:c28(),["SharedCodec559"]:c29(),["SharedCodec560"]:c30(),["SharedCodec561"]:c31(),["SharedCodec562"]:c32(),["SharedCodec563"]:c33(),["SharedCodec564"]:c34(),["SharedCodec96"]:c35(),["SharedCodec99"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
