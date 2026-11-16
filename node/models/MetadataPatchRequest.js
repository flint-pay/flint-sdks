import { d983 as c0 } from '../descriptors/data/48.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d983 as d983 } from '../descriptors/data/48.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d983;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMetadataPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
