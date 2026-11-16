import { d732 as c0 } from '../descriptors/data/39.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d732 as d732 } from '../descriptors/data/39.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
