import nextMDX from '@next/mdx';
import type { NextConfig } from "next";

const withMDX = nextMDX();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
