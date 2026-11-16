import { d8357 as c0 } from '../descriptors/data/396.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8357 as d8357 } from '../descriptors/data/396.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
