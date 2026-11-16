import { d5644 as c0 } from '../descriptors/data/246.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5644 as d5644 } from '../descriptors/data/246.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5644;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
