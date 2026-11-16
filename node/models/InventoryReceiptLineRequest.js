import { d7896 as c0 } from '../descriptors/data/369.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7896 as d7896 } from '../descriptors/data/369.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7896;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReceiptLineRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReceiptLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
