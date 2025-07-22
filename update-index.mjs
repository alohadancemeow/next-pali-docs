// @ts-check
import { algoliasearch } from "algoliasearch";
import { sync } from "fumadocs-core/search/algolia";
import * as fs from "node:fs";

const content = fs.readFileSync(".next/server/app/static.json.body");

// now you can pass it to `sync`
/** @type {import('fumadocs-core/search/algolia').DocumentRecord[]} **/
const records = JSON.parse(content.toString());

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || '';

const client = algoliasearch(appId, apiKey);

void sync(client, {
  indexName: "docs",
  documents: records,
});
