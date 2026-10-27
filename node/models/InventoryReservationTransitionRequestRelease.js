import { d696 as c0 } from '../descriptors/data/30.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4082 as c1, d4083 as c2 } from '../descriptors/data/173.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d696 as d696 } from '../descriptors/data/30.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestRelease"]:c0(),["SharedCodec857"]:c1(),["SharedCodec858"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestRelease(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
