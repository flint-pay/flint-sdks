import { d58 as c0 } from '../descriptors/data/2.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9472 as c1 } from '../descriptors/data/431.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9508 as c2 } from '../descriptors/data/435.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9702 as c3, d9704 as c4, d9706 as c5, d9722 as c6, d9711 as c11, d9713 as c12, d9714 as c13, d9715 as c14, d9720 as c15, d9723 as c16 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9534 as c7, d9535 as c8, d9536 as c9, d9537 as c10 } from '../descriptors/data/438.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d58 as d58 } from '../descriptors/data/2.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d58;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestEligibility"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec164"]:c7(),["SharedCodec165"]:c8(),["SharedCodec166"]:c9(),["SharedCodec167"]:c10(),["SharedCodec2674"]:c11(),["SharedCodec2676"]:c12(),["SharedCodec2677"]:c13(),["SharedCodec2678"]:c14(),["SharedCodec96"]:c15(),["SharedCodec99"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
