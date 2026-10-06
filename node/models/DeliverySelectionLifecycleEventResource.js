import { d727 as c0 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d727 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliverySelectionLifecycleEventResource"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionLifecycleEventResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
