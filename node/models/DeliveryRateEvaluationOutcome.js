import { d560 as c0 } from '../descriptors/data/32.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d567 as c1 } from '../descriptors/data/33.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6588 as c3, d6590 as c4, d6591 as c5, d6594 as c6 } from '../descriptors/data/301.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5255 as c7, d5256 as c8, d5257 as c9, d5258 as c10, d5259 as c11, d5260 as c12 } from '../descriptors/data/231.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d560 as d560 } from '../descriptors/data/32.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d560;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec131"]:c3(),["SharedCodec133"]:c4(),["SharedCodec134"]:c5(),["SharedCodec137"]:c6(),["SharedCodec630"]:c7(),["SharedCodec631"]:c8(),["SharedCodec632"]:c9(),["SharedCodec633"]:c10(),["SharedCodec634"]:c11(),["SharedCodec635"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
