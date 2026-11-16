import { d6745 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c1 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8963 as c2 } from '../descriptors/data/431.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6508 as c3 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6508 as d6508 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2406"]:c0(),["SharedCodec2409"]:c1(),["SharedCodec2494"]:c2(),["UpdatePriceListRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePriceListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
