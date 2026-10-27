import { d4066 as c0 } from '../descriptors/data/173.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4066 as d4066 } from '../descriptors/data/173.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingDemand"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingDemand(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
