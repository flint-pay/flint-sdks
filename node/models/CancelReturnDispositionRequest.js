import { d132 as c0 } from '../descriptors/data/6.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d132 as d132 } from '../descriptors/data/6.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d132;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
