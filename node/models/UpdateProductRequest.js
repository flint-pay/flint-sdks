import { d6754 as c0, d6755 as c1, d6746 as c3, d6747 as c4, d6745 as c5 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6761 as c2, d6766 as c6 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8987 as c7, d8988 as c8 } from '../descriptors/data/433.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9006 as c9, d9007 as c10 } from '../descriptors/data/434.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6509 as c11 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6509 as d6509 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6509;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec2404"]:c3(),["SharedCodec2405"]:c4(),["SharedCodec2406"]:c5(),["SharedCodec2408"]:c6(),["SharedCodec2495"]:c7(),["SharedCodec2496"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
