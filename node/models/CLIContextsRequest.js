import { d112 as c0 } from '../descriptors/data/5.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d112 as d112 } from '../descriptors/data/5.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIContextsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIContextsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
