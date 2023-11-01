import { type Configuration } from 'webpack'
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
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(buildCssLoader(true))
  return config
}
