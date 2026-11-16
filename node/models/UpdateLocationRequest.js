import { d6844 as c0, d6842 as c1, d6843 as c2, d6841 as c4 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c3 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8100 as c5, d8101 as c6, d8102 as c7, d8103 as c8 } from '../descriptors/data/378.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6489 as c9 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6489 as d6489 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec2406"]:c3(),["SharedCodec2409"]:c4(),["SharedCodec2452"]:c5(),["SharedCodec2453"]:c6(),["SharedCodec2454"]:c7(),["SharedCodec2455"]:c8(),["UpdateLocationRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
