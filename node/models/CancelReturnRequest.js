import { d136 as c0, d137 as c1 } from '../descriptors/data/6.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d136 as d136 } from '../descriptors/data/6.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d136;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnRequest"]:c0(),["CancelReturnResolutionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
