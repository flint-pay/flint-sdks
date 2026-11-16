import { d8448 as c0 } from '../descriptors/data/401.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8448 as d8448 } from '../descriptors/data/401.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
