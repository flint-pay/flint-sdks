import { d2094 as c0, d2093 as c1, d2092 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2094 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseInventoryReservationRequest"]:c0(),["SharedCodec530"]:c1(),["SharedCodec531"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
