import { d358 as c0 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9236 as c3, d9238 as c5, d9239 as c6 } from '../descriptors/data/448.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9250 as c4 } from '../descriptors/data/449.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9313 as c7 } from '../descriptors/data/453.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8350 as c8 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d358 as d358 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestCorrection"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["SharedCodec488"]:c4(),["SharedCodec492"]:c5(),["SharedCodec493"]:c6(),["SharedCodec494"]:c7(),["SharedCodec94"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
