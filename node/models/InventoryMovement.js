import { d1614 as c0, d1618 as c1, d1622 as c2, d1642 as c3, d257 as c4, d258 as c5 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1622 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1622;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventorySourceReference"]:c3(),["InventorySourceSystem"]:c4(),["SharedCodec65"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
