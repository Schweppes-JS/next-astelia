import createNextIntlPlugin from "next-intl/plugin";
import "./src/env.js";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const config = { transpilePackages: ["lucide-react"] };

export default withNextIntl(config);
