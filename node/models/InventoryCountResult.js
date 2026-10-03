import { d253 as c0, d1577 as c1, d1578 as c2, d1582 as c3, d1585 as c4, d1589 as c5, d251 as c6, d252 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1582 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1582;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryItem"]:c4(),["InventoryLevel"]:c5(),["InventorySourceSystem"]:c6(),["SharedCodec64"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
