import { d179 as c0 } from '../descriptors/data/8.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d179 as d179 } from '../descriptors/data/8.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d179;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CloseGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCloseGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
