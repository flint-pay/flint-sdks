import { d323 as c0, d903 as c1, d902 as c2, d913 as c3, d2034 as c4, d914 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d914 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d914;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec252"]:c2(),["SharedCodec256"]:c3(),["SignedMoney"]:c4(),["Webhook_gift_card_transaction_created_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_transaction_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
