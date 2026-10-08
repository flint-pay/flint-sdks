import { d1629 as c0, d1626 as c1, d1627 as c2, d1628 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1629 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1629;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingSourceRequest"]:c0(),["SharedCodec403"]:c1(),["SharedCodec404"]:c2(),["SharedCodec405"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
