import { d6951 as c0, d6948 as c2, d6949 as c3, d6950 as c4 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d213 as c1 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6797 as c5, d6798 as c6, d6799 as c7 } from '../descriptors/data/303.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6819 as c8, d6820 as c9 } from '../descriptors/data/304.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d213 as d213 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec284"]:c2(),["SharedCodec285"]:c3(),["SharedCodec286"]:c4(),["SharedCodec287"]:c5(),["SharedCodec288"]:c6(),["SharedCodec289"]:c7(),["SharedCodec302"]:c8(),["SharedCodec303"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
