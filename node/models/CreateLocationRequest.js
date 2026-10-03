import { d393 as c0, d194 as c1, d1735 as c2, d1738 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d393 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d393;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateLocationRequest"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
