import { d6844 as c0, d6842 as c4, d6843 as c5 } from '../descriptors/data/306.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d283 as c1 } from '../descriptors/data/15.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8099 as c2 } from '../descriptors/data/375.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c3 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d283 as d283 } from '../descriptors/data/15.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateLocationRequest"]:c1(),["LocationCoordinateRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
