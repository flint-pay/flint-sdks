import { d197 as c0 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6696 as c1 } from '../descriptors/data/296.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6685 as c2, d6686 as c3, d6687 as c4 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6642 as c5 } from '../descriptors/data/293.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d197 as d197 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequest"]:c0(),["SharedCodec275"]:c1(),["SharedCodec276"]:c2(),["SharedCodec277"]:c3(),["SharedCodec278"]:c4(),["SharedCodec3"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
