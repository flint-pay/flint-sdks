import { d6899 as c0, d6900 as c1, d6901 as c2 } from '../descriptors/data/327.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6902 as c3 } from '../descriptors/data/328.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6857 as c4, d6858 as c5 } from '../descriptors/data/326.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d363 as c6 } from '../descriptors/data/20.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d363 as d363 } from '../descriptors/data/20.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d363;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCapabilities"]:c0(),["BuyerPauseCapability"]:c1(),["BuyerRetentionOffer"]:c2(),["BuyerSkipCapability"]:c3(),["CustomerAccountPresentationRequest"]:c4(),["CustomerAccountRouteTemplatesRequest"]:c5(),["CustomerAccountSettingsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
