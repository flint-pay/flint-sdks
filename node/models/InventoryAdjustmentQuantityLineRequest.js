import { d3985 as c0 } from '../descriptors/data/169.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3985 as d3985 } from '../descriptors/data/169.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3985;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentQuantityLineRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentQuantityLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
