import { d4093 as c0 } from '../descriptors/data/174.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4093 as d4093 } from '../descriptors/data/174.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryTransferLineRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
