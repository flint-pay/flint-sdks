import { d4731 as c0 } from '../descriptors/data/212.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4731 as d4731 } from '../descriptors/data/212.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItemCreateRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryItemCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
