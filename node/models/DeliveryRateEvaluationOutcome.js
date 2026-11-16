import { d565 as c0 } from '../descriptors/data/32.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d572 as c1 } from '../descriptors/data/33.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6658 as c3, d6660 as c4, d6661 as c5 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6664 as c6 } from '../descriptors/data/308.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5293 as c7, d5294 as c8, d5295 as c9, d5296 as c10, d5297 as c11, d5298 as c12 } from '../descriptors/data/232.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d565 as d565 } from '../descriptors/data/32.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec126"]:c3(),["SharedCodec128"]:c4(),["SharedCodec129"]:c5(),["SharedCodec132"]:c6(),["SharedCodec633"]:c7(),["SharedCodec634"]:c8(),["SharedCodec635"]:c9(),["SharedCodec636"]:c10(),["SharedCodec637"]:c11(),["SharedCodec638"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
