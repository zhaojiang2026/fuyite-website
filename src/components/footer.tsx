import Link from 'next/link';

const services = [
  { href: '/services#consulting', label: '人力资源管理咨询' },
  { href: '/services#outsourcing', label: '人力资源业务外包' },
  { href: '/services#recruitment', label: '人才招聘和派遣' },
  { href: '/services#training', label: '人力资源培训及开发' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="text-lg font-bold text-slate-900">F</span>
              </div>
              <div>
                <span className="font-bold text-lg">福伊特</span>
                <span className="text-sm text-slate-400 ml-1">企业管理</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              福伊特是一家具备&quot;人力资源服务&quot;和&quot;劳务派遣&quot;双资格证书的全方位、专业化人力资源解决方案服务公司。秉持&quot;专注、高效、共赢&quot;的价值观，为企业增效减负。
            </p>
            <p className="text-slate-400 text-sm">
              专注、协作、共赢 | 用行动创造无限可能
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  服务项目
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">核心服务</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
            <div>
              <span className="font-medium text-white mr-2">电话:</span>
              0512-52713026 / 17751420888
            </div>
            <div>
              <span className="font-medium text-white mr-2">地址:</span>
              常熟市梅李镇钢城路1号C-19
            </div>
            <div>
              <span className="font-medium text-white mr-2">愿景:</span>
              成为长三角具有影响力的专业人力资源供应商
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} 福伊特企业管理有限公司 FUYITE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
