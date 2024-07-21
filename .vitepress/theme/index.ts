import "./tailwind.postcss.css";
import DefaultTheme from "vitepress/theme";
import type { Theme } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
} satisfies Theme