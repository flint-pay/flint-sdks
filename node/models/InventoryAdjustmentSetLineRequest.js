import { d7823 as c0 } from '../descriptors/data/365.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7823 as d7823 } from '../descriptors/data/365.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7823;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentSetLineRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentSetLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
