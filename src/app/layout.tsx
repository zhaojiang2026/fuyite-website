import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: '福伊特企业管理 - 专业人力资源服务',
    template: '%s | 福伊特企业管理',
  },
  description:
    '福伊特是一家具备"人力资源服务"和"劳务派遣"双资格证书的专业人力资源解决方案服务公司。专注、高效、共赢，为企业增效减负。',
  keywords: [
    '福伊特',
    '人力资源',
    '劳务派遣',
    '人力资源外包',
    '人才招聘',
    '企业管理',
    '苏州人力资源',
    '常熟人力资源',
  ],
  authors: [{ name: '福伊特企业管理有限公司' }],
  openGraph: {
    title: '福伊特企业管理 - 专业人力资源服务',
    description:
      '专注、高效、共赢 - 为人才增值为企业增效',
    url: 'https://fuyite.com',
    siteName: '福伊特企业管理',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
