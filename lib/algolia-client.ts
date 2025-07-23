import { liteClient } from "algoliasearch/lite";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY as string;

const client = liteClient(appId, apiKey);

export default client;
