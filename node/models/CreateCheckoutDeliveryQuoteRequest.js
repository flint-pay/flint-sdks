import { d8772 as c0, d8773 as c1, d8777 as c7, d8778 as c9, d8779 as c10, d8780 as c11, d8781 as c12 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d245 as c2 } from '../descriptors/data/11.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8692 as c3, d8693 as c4, d8698 as c5, d8694 as c20, d8699 as c21, d8700 as c22, d8695 as c23, d8696 as c24 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d565 as c6 } from '../descriptors/data/32.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c8 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8782 as c13, d8783 as c14, d8784 as c15, d8785 as c16, d8786 as c17, d8787 as c18, d8788 as c19 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d245 as d245 } from '../descriptors/data/11.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec197"]:c9(),["SharedCodec198"]:c10(),["SharedCodec199"]:c11(),["SharedCodec200"]:c12(),["SharedCodec201"]:c13(),["SharedCodec202"]:c14(),["SharedCodec203"]:c15(),["SharedCodec204"]:c16(),["SharedCodec205"]:c17(),["SharedCodec206"]:c18(),["SharedCodec207"]:c19(),["SharedCodec736"]:c20(),["SharedCodec742"]:c21(),["SharedCodec743"]:c22(),["SharedCodec744"]:c23(),["SharedCodec745"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
