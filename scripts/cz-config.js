const map = require("lodash/map");

module.exports = {
  prompter: prompter,
  formatCommit: formatCommit
};

const types = {
  feat: {
    description: "A new feature",
    title: "Features"
  },
  fix: {
    description: "A bug fix",
    title: "Bug Fixes"
  },
  chore: {
    description: "Other changes that don't modify src or test files",
    title: "Chores"
  },
  docs: {
    description: "Documentation only changes",
    title: "Documentation"
  },
  style: {
    description:
      "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    title: "Styles"
  },
  refactor: {
    description: "A code change that neither fixes a bug nor adds a feature",
    title: "Code Refactoring"
  },
  perf: {
    description: "A code change that improves performance",
    title: "Performance Improvements"
  },
  test: {
    description: "Adding missing tests or correcting existing tests",
    title: "Tests"
  },
  build: {
    description:
      "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
    title: "Builds"
  },
  ci: {
    description:
      "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
    title: "Continuous Integrations"
  },
  revert: {
    description: "Reverts a previous commit",
    title: "Reverts"
  }
};

function prompter(cz, commit) {
  cz.prompt([
    {
      type: "list",
      name: "type",
      message: "select type of change (required):\n",
      choices: map(types, (type, key) => {
        return {
          name: `${key}: ${type.description}`,
          value: key
        };
      })
    },
    {
      type: "input",
      name: "storyId",
      message: "store id (optional):\n"
    },
    {
      type: "input",
      name: "message",
      message: "commit message (required):\n",
      validate: function(input) {
        if (!input) {
          return "empty commit message";
        } else {
          return true;
        }
      }
    }
  ]).then(answers => {
    formatCommit(commit, answers);
  });
}

function formatCommit(commit, answers) {
  const { type, storyId, message } = answers;
  commit(storyId ? `${type}: [${storyId}] ${message}` : `${type}: ${message}`);
}
