import { d6744 as c0 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8548 as c1 } from '../descriptors/data/403.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7412 as c2, d7413 as c3, d7414 as c4, d7415 as c5, d7416 as c6 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6675 as c7 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8548 as d8548 } from '../descriptors/data/403.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8548;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["OrderLineItemModifierRequestModel"]:c1(),["SharedCodec417"]:c2(),["SharedCodec418"]:c3(),["SharedCodec419"]:c4(),["SharedCodec420"]:c5(),["SharedCodec421"]:c6(),["TextModifierRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
