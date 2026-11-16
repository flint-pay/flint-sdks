import { d6755 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6755 as d6755 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6755;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputSourceURL"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageInputSourceURL(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
