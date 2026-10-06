import { d608 as c0, d77 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d608 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d608;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryExternalPricingStrategy"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryExternalPricingStrategy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
