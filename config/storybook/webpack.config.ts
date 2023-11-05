import { type RuleSetRule, type Configuration, DefinePlugin } from 'webpack'
import { type BuildPath } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPath = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(buildCssLoader(true))
  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true
    })
  )
  return config
}
