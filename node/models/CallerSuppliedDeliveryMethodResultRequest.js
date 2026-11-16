import { d6648 as c0 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6649 as c1, d6653 as c2, d6654 as c4, d6655 as c5, d6656 as c6, d6657 as c7, d6658 as c8, d6659 as c9, d6660 as c10, d6661 as c11, d6662 as c12 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6663 as c13, d6664 as c14 } from '../descriptors/data/308.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6648 as d6648 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5(),["SharedCodec124"]:c6(),["SharedCodec125"]:c7(),["SharedCodec126"]:c8(),["SharedCodec127"]:c9(),["SharedCodec128"]:c10(),["SharedCodec129"]:c11(),["SharedCodec130"]:c12(),["SharedCodec131"]:c13(),["SharedCodec132"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
