import { d588 as c0, d589 as c1, d590 as c2, d607 as c3, d723 as c4, d736 as c5, d737 as c6 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d607 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d607;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailability"]:c0(),["DeliveryBlackoutInterval"]:c1(),["DeliveryBusinessDayRange"]:c2(),["DeliveryEstimateRule"]:c3(),["DeliveryScheduleWindowRule"]:c4(),["DeliveryTransitTimeRule"]:c5(),["DeliveryWeeklyInterval"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
