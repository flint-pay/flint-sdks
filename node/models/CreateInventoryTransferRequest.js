import { d176 as c0 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4093 as c1 } from '../descriptors/data/174.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d176 as d176 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryTransferRequest"]:c0(),["InventoryTransferLineRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
