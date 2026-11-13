import { d6579 as c0 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6583 as c1, d6584 as c3, d6585 as c4, d6586 as c5, d6587 as c6, d6588 as c7, d6589 as c8, d6590 as c9, d6591 as c10, d6592 as c11, d6593 as c12, d6594 as c13 } from '../descriptors/data/301.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6579 as d6579 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6579;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec127"]:c3(),["SharedCodec128"]:c4(),["SharedCodec129"]:c5(),["SharedCodec130"]:c6(),["SharedCodec131"]:c7(),["SharedCodec132"]:c8(),["SharedCodec133"]:c9(),["SharedCodec134"]:c10(),["SharedCodec135"]:c11(),["SharedCodec136"]:c12(),["SharedCodec137"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
