import { d8731 as c0, d8732 as c1, d8733 as c3, d8734 as c4, d8735 as c5 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10658 as c6, d10660 as c8, d10661 as c9, d10662 as c10, d10663 as c11, d10664 as c12 } from '../descriptors/data/504.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8843 as c7 } from '../descriptors/data/396.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8057 as c13 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8155 as c14 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8403 as c15 } from '../descriptors/data/372.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10701 as c16, d10702 as c17, d10703 as c18, d10704 as c19, d10705 as c20 } from '../descriptors/data/507.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10726 as c21, d10727 as c22, d10728 as c23 } from '../descriptors/data/508.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7811 as c24 } from '../descriptors/data/330.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7811 as d7811 } from '../descriptors/data/330.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec191"]:c7(),["SharedCodec2786"]:c8(),["SharedCodec2787"]:c9(),["SharedCodec2788"]:c10(),["SharedCodec2789"]:c11(),["SharedCodec2790"]:c12(),["SharedCodec3081"]:c13(),["SharedCodec3084"]:c14(),["SharedCodec3085"]:c15(),["SharedCodec3186"]:c16(),["SharedCodec3187"]:c17(),["SharedCodec3188"]:c18(),["SharedCodec3189"]:c19(),["SharedCodec3190"]:c20(),["UpdateReturnReplacementLineItemRequest"]:c21(),["UpdateReturnResolutionAdjustmentRequest"]:c22(),["UpdateReturnResolutionLineItemRequest"]:c23(),["UpdateReturnResolutionRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
