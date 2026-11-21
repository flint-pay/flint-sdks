import { d397 as c0 } from '../descriptors/data/23.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8731 as c1, d8732 as c2, d8733 as c5, d8734 as c6, d8735 as c7 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c4 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10657 as c8, d10658 as c9, d10653 as c10, d10660 as c13, d10661 as c14, d10662 as c15, d10663 as c16, d10664 as c17, d10665 as c18, d10666 as c19, d10654 as c23, d10655 as c24, d10656 as c25 } from '../descriptors/data/504.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9722 as c11, d9723 as c28 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8843 as c12 } from '../descriptors/data/396.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10667 as c20, d10668 as c21, d10669 as c22 } from '../descriptors/data/505.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10724 as c26, d10725 as c27 } from '../descriptors/data/508.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d397 as d397 } from '../descriptors/data/23.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d397;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["OrderDraftLineItemTaxCalculationRequestModel"]:c5(),["OrderDraftTaxComponentRequestModel"]:c6(),["OrderDraftTaxJurisdictionRequestModel"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["ReturnResolutionAdjustmentRequest"]:c10(),["ReturnResolutionLineItemRequest"]:c11(),["SharedCodec191"]:c12(),["SharedCodec2786"]:c13(),["SharedCodec2787"]:c14(),["SharedCodec2788"]:c15(),["SharedCodec2789"]:c16(),["SharedCodec2790"]:c17(),["SharedCodec2792"]:c18(),["SharedCodec2793"]:c19(),["SharedCodec2794"]:c20(),["SharedCodec558"]:c21(),["SharedCodec559"]:c22(),["SharedCodec561"]:c23(),["SharedCodec563"]:c24(),["SharedCodec564"]:c25(),["SharedCodec565"]:c26(),["SharedCodec566"]:c27(),["SharedCodec99"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
