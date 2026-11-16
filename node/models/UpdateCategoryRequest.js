import { d6746 as c0, d6747 as c1, d6745 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6464 as c3 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6464 as d6464 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6464;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2404"]:c0(),["SharedCodec2405"]:c1(),["SharedCodec2406"]:c2(),["UpdateCategoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
