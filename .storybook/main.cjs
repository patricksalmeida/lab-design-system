const { config } = require("@storybook/addon-actions")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true,
    "staticDirs": [
      "../public"
    ]
  },
  viteFinal: (config, { configType}) => {
    /* essa config foi adicionada para que o storybook funcione dentro do Gh Pages */
    if (configType === 'PRODUCTION') {
      config.base = '/lab-design-system/' // Aqui deve vir o nome exato do repo
    }

    return config
  }
}