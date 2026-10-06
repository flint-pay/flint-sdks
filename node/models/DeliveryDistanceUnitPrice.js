import { d602 as c0, d603 as c1, d77 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d602 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d602;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistanceUnitPrice"]:c0(),["DeliveryDistanceUnitPriceRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryDistanceUnitPrice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
