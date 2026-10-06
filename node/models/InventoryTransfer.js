import { d1644 as c0, d1654 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1644 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1644;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryTransfer"]:c0(),["InventoryTransferLine"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransfer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
