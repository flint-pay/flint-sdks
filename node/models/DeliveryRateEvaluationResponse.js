import { d559 as c0, d560 as c1, d566 as c2 } from '../descriptors/data/32.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d567 as c3 } from '../descriptors/data/33.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c4 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6588 as c5, d6590 as c6, d6591 as c7, d6594 as c8 } from '../descriptors/data/301.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5255 as c9, d5256 as c10, d5257 as c11, d5258 as c12, d5259 as c13, d5260 as c14 } from '../descriptors/data/231.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d566 as d566 } from '../descriptors/data/32.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec131"]:c5(),["SharedCodec133"]:c6(),["SharedCodec134"]:c7(),["SharedCodec137"]:c8(),["SharedCodec630"]:c9(),["SharedCodec631"]:c10(),["SharedCodec632"]:c11(),["SharedCodec633"]:c12(),["SharedCodec634"]:c13(),["SharedCodec635"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
