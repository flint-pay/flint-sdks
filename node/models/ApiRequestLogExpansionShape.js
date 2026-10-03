import { d21 as c0 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d21 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d21;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApiRequestLogExpansionShape"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApiRequestLogExpansionShape(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
