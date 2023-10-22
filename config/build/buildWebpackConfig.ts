import webpack from 'webpack';

import { BuildOptions } from "./types/config";
import { BuilldLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: BuilldLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}