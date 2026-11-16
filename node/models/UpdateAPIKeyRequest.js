import { d6681 as c0, d6682 as c1 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6696 as c2, d6697 as c4, d6698 as c5 } from '../descriptors/data/296.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6642 as c3 } from '../descriptors/data/293.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6462 as c6 } from '../descriptors/data/278.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6462 as d6462 } from '../descriptors/data/278.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2402"]:c0(),["SharedCodec2403"]:c1(),["SharedCodec275"]:c2(),["SharedCodec3"]:c3(),["SharedCodec508"]:c4(),["SharedCodec509"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
