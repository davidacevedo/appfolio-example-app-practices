module.exports = function config(api) {
  const validEnv = ["development", "test", "production"];
  const currentEnv = api.env();
  const isDevelopmentEnv = api.env("development");
  const isProductionEnv = api.env("production");
  const isTestEnv = api.env("test");

  return {
    presets: [
      isTestEnv && ["@babel/preset-env", { targets: { node: "current" } }],
      (isProductionEnv || isDevelopmentEnv) && [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: "3.8",
          modules: "auto",
          bugfixes: true,
          exclude: ["transform-typeof-symbol"],
        },
      ],
      [
        "@babel/preset-react",
        {
          development: isDevelopmentEnv || isTestEnv,
          useBuiltIns: true,
        },
      ],
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
    ].filter(Boolean),
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };
};
