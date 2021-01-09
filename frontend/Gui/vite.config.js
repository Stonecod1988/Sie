// @ts-check
import reactPlugin from 'vite-plugin-react'


/**
 * @type { import('vite').UserConfig }
 */
const config = {
    jsx: 'react',
    plugins: [reactPlugin],
    optimizeDeps: {
        include: ['@react-select/async', '@react-select/animated']
    }
};

export default config
