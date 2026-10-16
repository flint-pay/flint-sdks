import { d1603 as c0, d1607 as c1, d1614 as c2, d1615 as c3, d1618 as c4, d228 as c5, d229 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1618 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryReceipt"]:c2(),["InventoryReceiptLine"]:c3(),["InventoryReceiptResult"]:c4(),["InventorySourceSystem"]:c5(),["SharedCodec42"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
