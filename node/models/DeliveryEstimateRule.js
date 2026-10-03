import { d572 as c0, d573 as c1, d574 as c2, d591 as c3, d705 as c4, d718 as c5, d719 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d591 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d591;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailability"]:c0(),["DeliveryBlackoutInterval"]:c1(),["DeliveryBusinessDayRange"]:c2(),["DeliveryEstimateRule"]:c3(),["DeliveryScheduleWindowRule"]:c4(),["DeliveryTransitTimeRule"]:c5(),["DeliveryWeeklyInterval"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
