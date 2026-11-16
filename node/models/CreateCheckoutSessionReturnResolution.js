import { d6951 as c0, d6948 as c2, d6949 as c3, d6950 as c4 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d213 as c1 } from '../descriptors/data/10.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6797 as c5, d6798 as c6, d6799 as c7 } from '../descriptors/data/306.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6819 as c8, d6820 as c9 } from '../descriptors/data/307.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d213 as d213 } from '../descriptors/data/10.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec284"]:c2(),["SharedCodec285"]:c3(),["SharedCodec286"]:c4(),["SharedCodec287"]:c5(),["SharedCodec288"]:c6(),["SharedCodec289"]:c7(),["SharedCodec302"]:c8(),["SharedCodec303"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
