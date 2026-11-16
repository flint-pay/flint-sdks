import { d6648 as c0 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6649 as c1, d6653 as c7, d6654 as c9, d6655 as c10, d6656 as c11, d6657 as c12, d6658 as c13, d6659 as c14, d6660 as c15, d6661 as c16, d6662 as c17 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d204 as c2 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6568 as c3 } from '../descriptors/data/302.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6569 as c4, d6574 as c5, d6570 as c20, d6575 as c21, d6576 as c22, d6571 as c23, d6572 as c24 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d478 as c6 } from '../descriptors/data/28.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c8 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6663 as c18, d6664 as c19 } from '../descriptors/data/308.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d204 as d204 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d204;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec122"]:c9(),["SharedCodec123"]:c10(),["SharedCodec124"]:c11(),["SharedCodec125"]:c12(),["SharedCodec126"]:c13(),["SharedCodec127"]:c14(),["SharedCodec128"]:c15(),["SharedCodec129"]:c16(),["SharedCodec130"]:c17(),["SharedCodec131"]:c18(),["SharedCodec132"]:c19(),["SharedCodec508"]:c20(),["SharedCodec509"]:c21(),["SharedCodec510"]:c22(),["SharedCodec511"]:c23(),["SharedCodec512"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
