import { d7956 as c0, d7957 as c1, d7958 as c2 } from '../descriptors/data/371.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6485 as c3 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6485 as d6485 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2435"]:c0(),["SharedCodec2436"]:c1(),["SharedCodec2437"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
