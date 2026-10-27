import { d4064 as c0 } from '../descriptors/data/173.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4064 as d4064 } from '../descriptors/data/173.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4064;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationOwnerRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationOwnerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
