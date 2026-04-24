import { Metadata } from 'next';
import { Target, Eye, Heart, Users, Briefcase, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解福伊特企业管理有限公司 - 一家具备"人力资源服务"和"劳务派遣"双资格证书的专业人力资源解决方案服务公司',
};

const coreValues = [
  {
    icon: Target,
    title: '专注',
    description: 'Focus',
    detail: '专注提供人力资源解决方案及相关咨询，提供全站式、专业化、定制化人力资源服务',
  },
  {
    icon: Users,
    title: '协作',
    description: 'Cooperation',
    detail: '建设企业、人才、客户三方共赢的发展平台，发挥人力资源价值',
  },
  {
    icon: Lightbulb,
    title: '高效',
    description: 'Efficient',
    detail: '让专业的人做专业的事，专业创造价值，专业创造高效',
  },
  {
    icon: Heart,
    title: '共赢',
    description: 'Win-win',
    detail: '立足企业发展战略，以企业为平台，实现多方共赢发展',
  },
];

const teamStrengths = [
  {
    title: '项目管理 + 客户服务团队',
    description: '拥有丰富的大型外包项目管理运营经验，提供专业人事及后勤服务',
    years: '10+',
  },
  {
    title: '专家顾问 + 项目规划团队',
    description: '拥有世界500强、大型服务型企业管理经验，熟悉传统制造业、现代化服务业的各类运营管理模式',
    years: '10+',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              关于福伊特
            </h1>
            <p className="text-xl text-white/80 mb-4">
              FUYITE 福伊特企业管理有限公司
            </p>
            <p className="text-lg text-white/70">
              专注于人，专业于事 | Focus On People, Professional In Business
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                公司简介
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FUYITE是一家具备&quot;人力资源服务&quot;和&quot;劳务派遣&quot;双资格证书的全方位、专业化人力资源解决方案服务公司。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                公司拥有一支来自于世界五百强企业和国际著名机构、具备国际先进人力资源管理理念并备本土化管理创新能力的高素质、专业化团队。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                公司秉持&quot;专注、高效、共赢&quot;的价值观，专注提供人力资源解决方案及相关咨询，提供全站式、专业化、定制化人力资源服务，致力发挥人力资源价值，为企业增效减负。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                以&quot;成为值得信赖的人力资源合作伙伴&quot;为使命，致力将企业发展成为&quot;长三角具有影响力的专业人力资源服务机构&quot;。
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">年行业经验</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">服务企业</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">成功案例</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">双证</div>
                  <div className="text-sm text-muted-foreground">资质认证</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              企业文化
            </h2>
            <p className="text-muted-foreground text-lg">
              愿景 Vision · 使命 Mission · 价值观 Spirit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">愿景 Vision</h3>
              <p className="text-primary font-medium mb-4">
                成为长三角具有影响力的
                <br />
                专业人力资源供应商
              </p>
              <p className="text-sm text-muted-foreground">
                Become an influential professional human resource supplier in Yangtze River Delta
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">使命 Mission</h3>
              <p className="text-primary font-medium mb-4">
                成为值得信赖的
                <br />
                人力资源合作伙伴
              </p>
              <p className="text-sm text-muted-foreground">
                Become a reliable human resource partner
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">价值观 Spirit</h3>
              <p className="text-primary font-medium mb-4">
                专注、协作、共赢
                <br />
                Focus, Cooperation and Win-win
              </p>
              <p className="text-sm text-muted-foreground">
                用行动创造无限可能！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              我们的追求
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              FUYITE从需求中来，立足人力资源如何发挥价值，以企业为平台，建设企业、人才、客户三方共赢的发展平台。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">{value.title}</span>
                    <span className="text-sm text-muted-foreground ml-2">{value.description}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              团队实力
            </h2>
            <p className="text-muted-foreground text-lg">
              我们的信心来自经验与智慧
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamStrengths.map((team, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary text-white">
                      <span className="text-2xl font-bold">{team.years}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {team.title}
                    </h3>
                    <p className="text-muted-foreground">{team.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                业务版图
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                业务布局立足长三角、以华东区为中心，影响力辐射全国。
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="text-foreground font-medium">长三角经济带核心区域</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-primary/60"></div>
                  <span className="text-foreground font-medium">华东地区重点覆盖</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                  <span className="text-foreground font-medium">全国范围服务延伸</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">长江三角洲</div>
                <div className="text-muted-foreground">Yangtze River Delta</div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-muted-foreground">
                    Business layout based on the Yangtze River Delta,
                    <br />
                    East China as the center of influence radiation throughout the country
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
