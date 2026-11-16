import { d9420 as c0, d9421 as c2, d9424 as c4, d9425 as c5 } from '../descriptors/data/456.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9470 as c1, d9472 as c3 } from '../descriptors/data/458.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d427 as c6 } from '../descriptors/data/26.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d427 as d427 } from '../descriptors/data/26.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilitiesRequest"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOfferRequest"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentationRequest"]:c4(),["CustomerAccountRouteTemplatesRequest"]:c5(),["CustomerAccountSettingsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
