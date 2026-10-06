import { d694 as c0, d2412 as c1, d2421 as c2, d2422 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2422 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackConfiguration"]:c0(),["SharedCodec631"]:c1(),["SharedCodec637"]:c2(),["UpdateDeliveryRateCallbackRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
