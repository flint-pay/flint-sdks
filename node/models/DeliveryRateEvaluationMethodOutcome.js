import { d564 as c0, d565 as c1 } from '../descriptors/data/32.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d572 as c2 } from '../descriptors/data/33.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6658 as c4, d6660 as c5, d6661 as c6 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6664 as c7 } from '../descriptors/data/308.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5293 as c8, d5294 as c9, d5295 as c10, d5296 as c11, d5297 as c12, d5298 as c13 } from '../descriptors/data/232.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d564 as d564 } from '../descriptors/data/32.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec126"]:c4(),["SharedCodec128"]:c5(),["SharedCodec129"]:c6(),["SharedCodec132"]:c7(),["SharedCodec633"]:c8(),["SharedCodec634"]:c9(),["SharedCodec635"]:c10(),["SharedCodec636"]:c11(),["SharedCodec637"]:c12(),["SharedCodec638"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
