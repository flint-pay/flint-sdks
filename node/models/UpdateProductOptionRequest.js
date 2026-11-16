import { d8987 as c0 } from '../descriptors/data/433.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9006 as c1, d9007 as c2 } from '../descriptors/data/434.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9006 as d9006 } from '../descriptors/data/434.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2495"]:c0(),["UpdateProductOptionRequest"]:c1(),["UpdateProductOptionValueRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
