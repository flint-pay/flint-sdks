import { d4167 as c0 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4167 as d4167 } from '../descriptors/data/171.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
