import { d329 as c0 } from '../descriptors/data/19.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9089 as c2, d9090 as c3 } from '../descriptors/data/438.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d329 as d329 } from '../descriptors/data/19.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReaderRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec472"]:c2(),["SharedCodec473"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
