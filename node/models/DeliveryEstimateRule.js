import { d552 as c0, d553 as c1, d554 as c2, d575 as c3, d696 as c4, d709 as c5, d710 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d575 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d575;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailability"]:c0(),["DeliveryBlackoutInterval"]:c1(),["DeliveryBusinessDayRange"]:c2(),["DeliveryEstimateRule"]:c3(),["DeliveryScheduleWindowRule"]:c4(),["DeliveryTransitTimeRule"]:c5(),["DeliveryWeeklyInterval"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
