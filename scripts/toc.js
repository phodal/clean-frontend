#!/usr/bin/env node

const path = require("path");
const execa = require("execa");
const fs = require("fs");

const tools = path.resolve("scripts/tools");
const docs = path.resolve("docs");
const readme = path.resolve(docs, "README.md");

execa
  .stdout(path.resolve(tools, "generate-toc.sh"))
  .then(toc => fs.writeFileSync(readme, toc, "utf8"));
