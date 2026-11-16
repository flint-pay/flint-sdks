import { d367 as c0 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6696 as c1, d6697 as c4, d6698 as c5 } from '../descriptors/data/299.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6642 as c2 } from '../descriptors/data/296.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9417 as c3, d9418 as c6, d9419 as c7 } from '../descriptors/data/459.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d367 as d367 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec275"]:c1(),["SharedCodec3"]:c2(),["SharedCodec507"]:c3(),["SharedCodec508"]:c4(),["SharedCodec509"]:c5(),["SharedCodec510"]:c6(),["SharedCodec511"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
