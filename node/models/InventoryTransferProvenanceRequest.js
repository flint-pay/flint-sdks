import { d1587 as c0, d1601 as c1 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1601 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1601;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
