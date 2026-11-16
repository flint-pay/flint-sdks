import { d6744 as c0 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6962 as c2 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9528 as c3, d9529 as c4 } from '../descriptors/data/461.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7412 as c5, d7413 as c6, d7414 as c7, d7415 as c8, d7416 as c9, d7417 as c10, d7418 as c11, d7419 as c12 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6388 as c13 } from '../descriptors/data/275.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6675 as c14 } from '../descriptors/data/295.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6388 as d6388 } from '../descriptors/data/275.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6388;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec2314"]:c3(),["SharedCodec2315"]:c4(),["SharedCodec417"]:c5(),["SharedCodec418"]:c6(),["SharedCodec419"]:c7(),["SharedCodec420"]:c8(),["SharedCodec421"]:c9(),["SharedCodec433"]:c10(),["SharedCodec434"]:c11(),["SharedCodec435"]:c12(),["SubscriptionPlanLineItemInputVariant"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
