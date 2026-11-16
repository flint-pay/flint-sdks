import { d564 as c0, d565 as c1 } from '../descriptors/data/32.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d571 as c2, d572 as c3 } from '../descriptors/data/33.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c4 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6658 as c5, d6660 as c6, d6661 as c7 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6664 as c8 } from '../descriptors/data/308.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5293 as c9, d5294 as c10, d5295 as c11, d5296 as c12, d5297 as c13, d5298 as c14 } from '../descriptors/data/232.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d571 as d571 } from '../descriptors/data/33.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d571;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec126"]:c5(),["SharedCodec128"]:c6(),["SharedCodec129"]:c7(),["SharedCodec132"]:c8(),["SharedCodec633"]:c9(),["SharedCodec634"]:c10(),["SharedCodec635"]:c11(),["SharedCodec636"]:c12(),["SharedCodec637"]:c13(),["SharedCodec638"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
