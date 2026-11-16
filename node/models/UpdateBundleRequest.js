import { d6754 as c0, d6755 as c1, d6746 as c4, d6747 as c5, d6745 as c6, d6743 as c9 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6761 as c2, d6766 as c8 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6737 as c7 } from '../descriptors/data/302.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6463 as c10 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6463 as d6463 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6463;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec2404"]:c4(),["SharedCodec2405"]:c5(),["SharedCodec2406"]:c6(),["SharedCodec2407"]:c7(),["SharedCodec2408"]:c8(),["UpdateBundleComponentRequest"]:c9(),["UpdateBundleRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
