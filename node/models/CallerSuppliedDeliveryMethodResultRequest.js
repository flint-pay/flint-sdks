import { d6578 as c0, d6579 as c1 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6583 as c2, d6584 as c4, d6585 as c5, d6586 as c6, d6587 as c7, d6588 as c8, d6589 as c9, d6590 as c10, d6591 as c11, d6592 as c12, d6593 as c13, d6594 as c14 } from '../descriptors/data/301.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c3 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6578 as d6578 } from '../descriptors/data/300.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec127"]:c4(),["SharedCodec128"]:c5(),["SharedCodec129"]:c6(),["SharedCodec130"]:c7(),["SharedCodec131"]:c8(),["SharedCodec132"]:c9(),["SharedCodec133"]:c10(),["SharedCodec134"]:c11(),["SharedCodec135"]:c12(),["SharedCodec136"]:c13(),["SharedCodec137"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
