import { d2449 as c0 } from '../descriptors/data/98.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2449 as d2449 } from '../descriptors/data/98.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2449;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateInventoryReservationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
