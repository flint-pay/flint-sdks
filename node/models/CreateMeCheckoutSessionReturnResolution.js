import { d6951 as c0, d6948 as c2, d6949 as c3, d6950 as c4 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d286 as c1 } from '../descriptors/data/15.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8270 as c5, d8271 as c6 } from '../descriptors/data/392.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d286 as d286 } from '../descriptors/data/15.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionReturnResolution"]:c1(),["SharedCodec284"]:c2(),["SharedCodec285"]:c3(),["SharedCodec286"]:c4(),["SharedCodec403"]:c5(),["SharedCodec404"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
