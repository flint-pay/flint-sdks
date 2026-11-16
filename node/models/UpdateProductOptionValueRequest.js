import { d8987 as c0 } from '../descriptors/data/433.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9007 as c1 } from '../descriptors/data/434.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9007 as d9007 } from '../descriptors/data/434.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9007;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2495"]:c0(),["UpdateProductOptionValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
